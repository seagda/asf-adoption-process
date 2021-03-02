const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

router.use("/assess", require("./behavioralAssessmentController"));
router.use("/document", require("./documentController"));
router.use("/medi-status", require("./mediStatusController"));

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionAny = ac.can(req.roles).readAny("Dog");
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    if (permissionAny.granted) {
        db.Dog.findAll({
            include: [
                { model: db.User, as: "currentlyWith", include: db.Address },
                { model: db.ExtContact, as: "origin", include: db.Address }]
        }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionAny.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.currentlyWith.Address.city;
                    dogJson.state = dogJson.currentlyWith.Address.state;
                } else {
                    dogJson.city = dogJson.origin.Address.city;
                    dogJson.state = dogJson.origin.Address.state;
                }
                const { currentlyWith, origin, ...dogToSend } = dogJson;
                return dogToSend;
            });
            res.json(dogRes);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    } else if (permissionOwn.granted) {
        db.Dog.findAll({
            include: [{ model: db.User, as: "currentlyWith", where: { id: req.userId }, include: db.Address },
            { model: db.ExtContact, as: "origin", include: db.Address }]
        }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionOwn.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.currentlyWith.Address.city;
                    dogJson.state = dogJson.currentlyWith.Address.state;
                } else {
                    dogJson.city = dogJson.origin.Address.city;
                    dogJson.state = dogJson.origin.Address.state;
                }
                const { currentlyWith, origin, ...dogToSend } = dogJson;
                return dogToSend;
            });
            res.json(dogRes);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    } else return res.status(403).send({ message: "Not authorized to view dogs" });
});

// show one DOG, with correct ROLE permission

router.get("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    const permissionAny = ac.can(req.roles).readAny("Dog");
    if (permissionOwn.granted || permissionAny.granted) {
        db.Dog.findByPk(req.params.id, {
            include: [
                { model: db.User, as: "currentlyWith", include: db.Address },
                { model: db.ExtContact, as: "currentlyWith", include: db.Address },
            ],
        }).then(dog => {
            let dogJson;
            if (dog.currentlyWithId === req.userId) {
                dogJson = permissionOwn.filter(dog.toJSON())
            } else if (permissionAny.granted) {
                dogJson = permissionAny.filter(dog.toJSON())
            } else return res.status(403).send({ message: "you can't view this dog" });

            if (dogJson.currentlyWithId) {
                dogJson.city = dogJson.currentlyWith.Address.city;
                dogJson.state = dogJson.currentlyWith.Address.state;
            } else {
                dogJson.city = dogJson.origin.Address.city;
                dogJson.state = dogJson.origin.Address.state;
            }
            const { currentlyWith, origin, ...dogToSend } = dogJson;
            res.json(dogToSend);
        });

    } else return res.status(403).send({ message: "Not authorized to view dogs" });
});

// create new DOG, with correct ROLE permission

router.post("/", (req, res) => {
    // TODO: createOwn dog permission for owner surrender
    // Check for permission to create dog
    const permissionAny = ac.can(req.roles).createAny("Dog");
    if (permissionAny.granted) {
        db.Dog.create(permissionAny.filter(req.body), { include: { model: db.ExtContact, as: "origin", include: db.Address } })
            // currentlyWith always starts null
            .then(dog => res.status(200).send({ id: dog.id }))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Database error" });
            });
    } else return res.status(403).send({ message: "Not authorized to add a dog" });
});

// update Own or Any DOG by id, with correct ROLE permission

router.put("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("Dog");
    const permissionAny = ac.can(req.roles).updateAny("Dog");
    if (permissionOwn.granted || permissionAny.granted) {
        db.Dog.findByPk(req.params.id)
            .then(dog => {
                let updates;
                if (dog.currentlyWithId === req.userId) updates = permissionOwn.filter(req.body);
                else if (permissionAny.granted) updates = permissionAny.filter(req.body);
                else return res.status(403).send({ message: "Not authorized to update this dog" });
                const promises = [dog, updates];
                if (updates.name && updates.name !== dog.name) promises[2] = dog.createDogAlias({ name: dog.name });
                if (updates.DogStatusId && updates.DogStatusId !== dog.DogStatusId) generateStatusAlerts(dog);
                return Promise.all(promises);
            })
            .then(([dog, updates, alias]) => dog.update(updates))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            });
    } else res.status(403).send({ message: "Not authorized to update dogs" });
});

// delete DOG by id, with SuperAdmin ONLY permission

router.delete("/archive/:id", (req, res) => {
    const permissionAny = ac.can(req.roles).deleteAny("Dog");
    if (permissionAny.granted) db.findByPk(req.params.id)
        .then(dog => dog.destroy())
        .then(() => res.status(200).send({ message: "Successfully archived" }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Internal server error" });
        });
    else return res.status(403).send({ message: "Not authorized to archive dogs" });
});

function generateStatusAlerts(dog) {
    dog.getRegion().then(Region => {
        const or = [
            { "$Roles.id$": 7 },
            { [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 6 }] }
        ];
        // Add alert for FOSTER READY, goes to Fosters in Region 
        if (dog.DogStatusId === 2) or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 4 }] })
        // Add alert for ALMOST ADOPTION READY, goes to PLACEMENT, ADOPTERS in REGION
        else if (dog.DogStatusId === 4) {
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 5 }] })
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 3 }] })
            // Add alert for ADOPTION READY, goes to PLACEMENT, ADOPTERS in REGION
        } else if (dog.DogStatusId === 4) {
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 5 }] })
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": 3 }] })
        }

        return Promise.all([db.User.findAll({
            where: {
                [db.Sequelize.Op.or]: or
            }, include: db.Role
        }),
        dog.getDogStatus()
        ]);
    }).then(([users, DogStatus]) => users.forEach(user => user.createAlert({ message: `${dog.name} is ${DogStatus.name}`, aboutDogId: dog.id }))).catch(console.error);
}

module.exports = router;