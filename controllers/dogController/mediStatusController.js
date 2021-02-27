const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

// show MediStatus for Own or Any Dog, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("MediStatus");
    const permissionAny = ac.can(req.roles).readAny("MediStatus");
    if (permissionOwn.granted || permissionAny.granted) {

        db.MediStatus
        .findByPk(req.params.id, {include: db.Dog})
        .then(medStat => {
            let medStatJson;
            if (medStat.Dog.currentlyWithId === req.userId) {
                medStatJson = permissionOwn.filter(medStat.toJSON())
            } else if (permissionAny.granted) {
                medStatJson = permissionAny.filter(medStat.toJSON())
            } else return res.status(401).send({ message: "you can't view this dog's medical status" });
            res.json(medStatJson);
        })
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view MediStatus" });
});

// create new MediStatus, with correct ROLE permission
router.post("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).createOwn("MediStatus");
    const permissionAny = ac.can(req.roles).createAny("MediStatus");
    db.Dog.findByPk(req.params.id)
    .then(dog => {
        if (permissionOwn.granted || permissionAny.granted) {
            let medStatJson;
            if (dog.currentlyWithId === req.userId) {
                medStatJson = permissionOwn.filter(req.body)
            } else if (permissionAny.granted) {
                medStatJson = permissionAny.filter(req.body)
            } else return res.status(401).send({ message: "you can't create assessments" })
    
        dog
          .createMediStatus(medStatJson) 
          .then(() => res.status(200).send({message: "Medical Status successfully created"}))
          .catch(err => {
            console.error(err)  
            res.status(422).send({ message: "Error with request" })
        });
    
        } else return res.status(401).send({ message: "Not authorized to create Behavioral Assessments" })

    })
});
// update MediStatus by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("MediStatus");
    const permissionAny = ac.can(req.roles).updateAny("MediStatus");
    if (permissionOwn.granted || permissionAny.granted) {
        
        db.MediStatus
        .findByPk(req.params.id, {include: db.Dog})
            .then(medStat => {
                let medStatJson;
                if (medStat.Dog.currentlyWithId === req.userId) {
                    medStatJson = permissionOwn.filter(medStat.toJSON())
                } else if (permissionAny.granted) {
                    medStatJson = permissionAny.filter(medStat.toJSON())
                } else return res.status(401).send({ message: "you can't update this dog's assessments" });
                res.json(medStatJson);
            })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update Medical Status"});
});

module.exports = router;