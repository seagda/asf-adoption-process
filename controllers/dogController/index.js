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
        db.Dog.findAll({ include: [{ model: db.User, include: db.Address }, { model: db.ExtContact, include: db.Address }] }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionAny.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.User.Address.city;
                    dogJson.state = dogJson.User.Address.state;
                } else {
                    dogJson.city = dogJson.ExtContact.Address.city;
                    dogJson.state = dogJson.ExtContact.Address.state;
                }
                const { User, ExtContact, ...dogToSend } = dogJson;
                return dogToSend;
            });
            console.log(dogRes);
            res.json(dogRes);
        });
    } else if (permissionOwn.granted) {
        db.Dog.findAll({ include: [{ model: db.User, where: { id: req.userId }, include: db.Address }, { model: db.ExtContact, include: db.Address }] }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionOwn.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.User.Address.city;
                    dogJson.state = dogJson.User.Address.state;
                } else {
                    dogJson.city = dogJson.ExtContact.Address.city;
                    dogJson.state = dogJson.ExtContact.Address.state;
                }
                const { User, ExtContact, ...dogToSend } = dogJson;
                return dogToSend;
            });
            console.log(dogRes);
            res.json(dogRes);
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
                { model: db.User, include: db.Address },
                { model: db.ExtContact, include: db.Address },
            ],
        }).then(dog => {
            let dogJson;
            if (dog.currentlyWithId === req.userId) {
                dogJson = permissionOwn.filter(dog.toJSON())
            } else if (permissionAny.granted) {
                dogJson = permissionAny.filter(dog.toJSON())
            } else return res.status(403).send({ message: "you can't view this dog" });

            if (dogJson.currentlyWithId) {
                dogJson.city = dogJson.User.Address.city;
                dogJson.state = dogJson.User.Address.state;
            } else {
                dogJson.city = dogJson.ExtContact.Address.city;
                dogJson.state = dogJson.ExtContact.Address.state;
            }
            const { User, ExtContact, ...dogToSend } = dogJson;
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
        db.Dog.create(permissionAny.filter(req.body), { include: { model: db.ExtContact, as: "origin" } })
            // currentlyWith always starts null
            .then(dog => res.status(200).send({ id: dog.id }))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Database error" });
            });
    } else return res.status(403).send({ message: "Not authorized to add a dog" });
});

// TODO: update Own or Any DOG by id, with correct ROLE permission

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
                return dog.update(updates);
            })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            });
    } else res.status(403).send({ message: "Not authorized to update dogs" });
});

// TODO: rename Own or Any DOG by id, update AliasTable with correct ROLE permission

router.put("rename/:id", (req, res) => {
    //TODO: first findbyPK for that dog, then dog.name gets inserted into the dog_alias table, then update dog.name by calling dog.update and passing new object with name key

});


// TODO: delete DOG by id, with SuperAdmin ONLY permission

router.delete("/archive/:id", (req, res) => {

});


module.exports = router;