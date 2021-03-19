const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();
const controllers = require("../../controllers");

router.use("/assess", require("./behavioralAssessment"));
router.use("/document", require("./document"));
router.use("/medi-status", require("./mediStatus"));

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    const permissionAny = ac.can(req.roles).readAny("Dog");
    if (permissionAny.granted || permissionOwn.granted) {
        let withFilter;
        if (!permissionAny.granted) withFilter = { id: req.userId };
        controllers.dog.getAll(null, withFilter)
            .then(dogs => res.json(permissionAny.granted ? permissionAny.filter(dogs) : permissionOwn.filter(dogs)))
            .catch(err => {
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

// get list of microchip mfgs
router.get("/microchip-mfg", (req, res) => db.MicrochipMfg.findAll().then(microchipMfgs => res.json(microchipMfgs)).catch(err => {
    console.error(err);
    res.status(500).send({ message: "Database error" });
}));

// show all DOCUMENTs for ONE dog, with correct ROLE permission
router.get("/:DogId/documents", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("Document");
    const permissionAny = ac.can(req.roles).readAny("Document");
    if (permissionOwn.granted || permissionAny.granted) {
        controllers.document.getForDog(req.params.DogId).then(docs => {
            if (docs.CurrentlyWithId == req.userId) res.json(permissionOwn.filter(docs.documents));
            else if (permissionAny.granted) res.json(permissionAny.filter(docs.documents));
            else res.status(403).send({ message: "Not authorized to view documents for this dog" });
        })
    } else return res.status(403).send({ message: "Not authorized to view documents" });
});

// show one DOG, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permissionReadOwn = ac.can(req.roles).readOwn("Dog");
    const permissionReadAny = ac.can(req.roles).readAny("Dog");
    const permissionUpdateOwn = ac.can(req.roles).updateOwn("Dog");
    const permissionUpdateAny = ac.can(req.roles).updateAny("Dog");
    if (permissionReadOwn.granted || permissionReadAny.granted) {
        controllers.dog.get(req.params.id).then(dog => {
            let dogFiltered;
            if (dog.CurrentlyWithId === req.userId) {
                dogFiltered = { ...permissionReadOwn.filter(dog), editable: permissionUpdateOwn.attributes }
            } else if (permissionReadAny.granted) {
                dogFiltered = { ...permissionReadAny.filter(dog), editable: permissionUpdateAny.attributes }
            } else return res.status(403).send({ message: "you can't view this dog" });
            if (dogFiltered.CurrentlyWith) dogFiltered.CurrentlyWith = ac.can(req.roles).readAny("User").filter(dogFiltered.CurrentlyWith);
            if (dogFiltered.Origin) dogFiltered.Origin = ac.can(req.roles).readAny("ExtContact").filter(dogFiltered.Origin);
            res.json(dogFiltered);
        }).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" })
        });
    } else return res.status(403).send({ message: "Not authorized to view dogs" });
});

// create new DOG, with correct ROLE permission

router.post("/", (req, res) => {
    // TODO: createOwn dog permission for owner surrender
    // Check for permission to create dog
    console.log(req.body)
    const permissionAny = ac.can(req.roles).createAny("Dog");
    console.log(permissionAny.filter(req.body))
    if (permissionAny.granted) {
        db.Dog.create({ ...permissionAny.filter(req.body), DogStatusId: 1 }, { include: { association: "Origin", include: db.Address } })
            // CurrentlyWith always starts null
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
    Promise.resolve((() => permissionOwn.granted && !permissionAny.granted ? db.Dog.findByPk(req.params.DogId).then(dog => dog.CurrentlyWithId === req.userId) : permissionAny.granted)())
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
    Promise.resolve((() => permissionOwn.granted && !permissionAny.granted ? db.Dog.findByPk(req.params.DogId).then(dog => dog.CurrentlyWithId === req.userId) : permissionAny.granted)())
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
                if (dog.CurrentlyWithId === req.userId) updates = permissionOwn.filter(req.body);
                else if (permissionAny.granted) updates = permissionAny.filter(req.body);
                else return res.status(403).send({ message: "Not authorized to update this dog" });
                const { name, CurrentlyWithId, DogStatusId, ...other } = updates;
                const promises = [];
                if (Object.entries(other).length) promises[0] = controllers.dog.update(dog, other);
                if (CurrentlyWithId) promises[1] = controllers.dog.updateCurrentlyWith(dog, CurrentlyWithId);
                if (DogStatusId) promises[2] = controllers.dog.updateStatus(dog, DogStatusId);
                if (name) promises[3] = controllers.dog.updateName(dog, name);
                return Promise.all(promises);
            })
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

/* function generateStatusAlerts(dog) {
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
            }, include: [db.Role, { association: "AssignedRegions" }]
        }),
        dog.getDogStatus()
        ]);
    })
        .then(([users, DogStatus]) => Promise.all(users.map(user => user.createAlert({ message: `${dog.name} is ${DogStatus.name}`, AboutDogId: dog.id }))))
        .then(alerts => alertController.notifyUsers(alerts))
        .catch(console.error);
} */

module.exports = router;