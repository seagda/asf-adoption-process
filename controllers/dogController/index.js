const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();
const sId = require("../../scripts/staticIds");

router.use("/assess", require("./behavioralAssessmentController"));
router.use("/document", require("./documentController"));
router.use("/medi-status", require("./mediStatusController"));

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    const permissionAny = ac.can(req.roles).readAny("Dog");
    if (permissionAny.granted || permissionOwn.granted) {
        const currentlyWith = { association: "currentlyWith", include: [db.Address, { association: "ResidesInRegion" }] };
        if (!permissionAny.granted) currentlyWith.where = { id: req.userId };
        db.Dog.findAll({
            include: [
                currentlyWith,
                db.DogStatus,
                { association: "origin", include: [db.Address, db.Region] },
                { model: db.DogPhoto, required: false, where: { profilePhoto: true } }
            ]
        }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionAny.granted ? permissionAny.filter(dog.toJSON()) : permissionOwn.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.currentlyWith.Address.city;
                    dogJson.state = dogJson.currentlyWith.Address.state;
                    dogJson.Region = dogJson.currentlyWith.ResidesInRegion;
                } else {
                    dogJson.city = dogJson.origin.Address.city;
                    dogJson.state = dogJson.origin.Address.state;
                    dogJson.Region = dogJson.origin.Region;
                }
                const { currentlyWith, ...dogToSend } = dogJson;
                if (dogJson.currentlyWith) dogToSend.currentlyWith = { firstName: currentlyWith.firstName, lastName: currentlyWith.lastName, id: currentlyWith.id };
                return dogToSend;
            });
            res.json(dogRes);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    } else return res.status(403).send({ message: "Not authorized to view dogs" });
});

router.get("/status", (req, res) => {
    db.DogStatus.findAll().then(statuses => res.json(statuses)).catch(err => {
        console.error(err);
        res.status(500).send({ message: "something is broken" });
    });
});

// show one DOG, with correct ROLE permission

router.get("/:id", (req, res) => {
    const permissionReadOwn = ac.can(req.roles).readOwn("Dog");
    const permissionReadAny = ac.can(req.roles).readAny("Dog");
    const permissionUpdateOwn = ac.can(req.roles).updateOwn("Dog");
    const permissionUpdateAny = ac.can(req.roles).updateAny("Dog");
    if (permissionReadOwn.granted || permissionReadAny.granted) {
        db.Dog.findByPk(req.params.id, {
            include: [
                { association: "currentlyWith", include: [db.Address, { association: "ResidesInRegion" }] },
                { association: "origin", include: [db.Address, db.Region] },
                db.DogPhoto
            ],
        }).then(dog => {
            // TODO: also check permissions for currently with and origin
            let dogJson;
            if (dog.currentlyWithId === req.userId) {
                dogJson = { ...permissionReadOwn.filter(dog.toJSON()), canEdit: permissionUpdateOwn.granted }
            } else if (permissionReadAny.granted) {
                dogJson = { ...permissionReadAny.filter(dog.toJSON()), canEdit: permissionUpdateAny.granted }
            } else return res.status(403).send({ message: "you can't view this dog" });
            res.json(dogJson);
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

// add photo to dog
router.post("/:DogId/photo", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("Dog");
    const permissionAny = ac.can(req.roles).updateAny("Dog");
    Promise.resolve((() => permissionOwn.granted && !permissionAny.granted ? db.Dog.findByPk(req.params.DogId).then(dog => dog.currentlyWithId === req.userId) : permissionAny.granted)())
        .then(granted => granted ? (req.body.profilePhoto ? db.DogPhoto.update({ profilePhoto: false }, { where: { DogId: req.params.DogId } }).then(() => true) : true) : false)
        .then(granted => granted
            ? db.DogPhoto.create({ DogId: req.params.DogId, url: req.body.url, profilePhoto: req.body.profilePhoto }).then(() => res.status(200).send({ message: "Successfully added photo" }))
            : res.status(403).send({ message: "Not authorized to add photos to this dog" }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
});

// change profile photo
router.put("/:DogId/profile-photo/:PhotoId", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("Dog");
    const permissionAny = ac.can(req.roles).updateAny("Dog");
    Promise.resolve((() => permissionOwn.granted && !permissionAny.granted ? db.Dog.findByPk(req.params.DogId).then(dog => dog.currentlyWithId === req.userId) : permissionAny.granted)())
        .then(granted => granted ? Promise.all([
            db.DogPhoto.update({ profilePhoto: false }, { where: { DogId: req.params.DogId, id: { [db.Sequelize.Op.ne]: req.params.PhotoId } } }),
            db.DogPhoto.update({ profilePhoto: true }, { where: { DogId: req.params.DogId, id: req.params.PhotoId } })
        ]).then(() => true) : false)
        .then(granted => granted ? res.status(200).send({ message: "Profile photo updated" }) : res.status(403).send({ message: "Not authorized to change this dog's profile photo" }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
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

// Generate ALERTS

function generateStatusAlerts(dog) {
    dog.getRegion().then(Region => {
        const or = [
            { "$Roles.id$": sId.ROLES.ADMIN },
            { [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.REGIONAL }] }
        ];
        // Add alert for FOSTER READY, goes to Fosters in Region 
        if (dog.DogStatusId === sId.DOG_STATUS.FOSTER_READY) or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.FOSTER }] })
        // Add alert for ALMOST ADOPTION READY, goes to PLACEMENT, ADOPTERS in REGION
        else if (dog.DogStatusId === sId.DOG_STATUS.ALMOST_READY) {
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.PLACEMENT }] })
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.ADOPTER }] })

            // Add alert for ADOPTION READY, goes to PLACEMENT, ADOPTERS in REGION
        } else if (dog.DogStatusId === sId.DOG_STATUS.READY_TO_ADOPT) {
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.PLACEMENT }] })
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.ADOPTER }] })
            or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.SUPERADMIN }] })

            // Add alert for ADOPTED, goes to SuperAdmin
        } else if (dog.DogStatusId === sId.DOG_STATUS.ADOPTED) or.push({ [db.Sequelize.Op.and]: [{ ResidesInRegionId: Region.id }, { "$Roles.id$": sId.ROLES.SUPERADMIN }] });

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