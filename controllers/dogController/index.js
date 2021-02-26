const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

router.use("/assess", require("./behavioralAssessmentController"));
router.use("/document", require("./documentController"));

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionAny = ac.can(req.roles).readAny("Dog");
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    if (permissionAny.granted) {
        db.Dog.findAll({ include: [{ model: db.User, include: db.Address }, { model: db.ExtContact, include: db.Address }] }).then(dogs=>
            {
                const dogRes = dogs.map(dog => {
                    const dogJson = permissionAny.filter(dog.toJSON());
                    if (dogJson.currentlyWithId) {
                        dogJson.city = dogJson.User.Address.city;
                        dogJson.state = dogJson.User.Address.state;
                    } else {
                        dogJson.city = dogJson.ExtContact.Address.city;
                        dogJson.state = dogJson.ExtContact.Address.state;
                    }
                    const { User, ExtContact, ...dogToSend} = dogJson;
                    return dogToSend;
                });
                console.log(dogRes);
                res.json(dogRes);
            });
    } else if (permissionOwn.granted) {
        db.Dog.findAll({ include: [{ model: db.User, where: {id:req.userId}, include: db.Address }, { model: db.ExtContact, include: db.Address }] }).then(dogs=>
            {
                const dogRes = dogs.map(dog => {
                    const dogJson = permissionOwn.filter(dog.toJSON());
                    if (dogJson.currentlyWithId) {
                        dogJson.city = dogJson.User.Address.city;
                        dogJson.state = dogJson.User.Address.state;
                    } else {
                        dogJson.city = dogJson.ExtContact.Address.city;
                        dogJson.state = dogJson.ExtContact.Address.state;
                    }
                    const { User, ExtContact, ...dogToSend} = dogJson;
                    return dogToSend;
                });
                console.log(dogRes);
                res.json(dogRes);
            });   

    } else return status(401).send({ message: "Not authorized to view dogs" });
});

// TODO: show one DOG, with correct ROLE permission

router.get("/:id", (req, res) => {

});

// TODO: create new DOG, with correct ROLE permission

router.post("/new", (req, res) => {

});

// TODO: update own DOG by id, with correct ROLE permission

router.put("/:id", (req, res) => {

});

// TODO: update any DOG by id, with correct ROLE permission (REGIONAL)

router.put("/:id", (req, res) => {

});

// TODO: rename own DOG by id, update AliasTable with correct ROLE permission

router.put("rename/:id", (req, res) => {

});

// TODO: rename any DOG by id, with correct ROLE permission

router.put("rename/:id", (req, res) => {

});

// TODO: delete DOG by id, with correct ROLE permission

router.delete("/archive/:id", (req, res) => {

});


// TODO: read all ASSESSMENTS for any DOG with correct ROLE permission

router.get("/assess", (req, res) => {

});

// TODO: read all ASSESSMENTS for own DOG with correct ROLE permission

router.get("/assess/:id", (req, res) => {

});

// TODO: create ASSESSMENT for DOG with correct ROLE permission

router.get("/add-assessment", (req, res) => {

});

// TODO: update ASSESSMENT for DOG with correct ROLE permission

router.put("/update-assessment/:id", (req, res) => {

});

// TODO: delete ASSESSMENT for DOG with correct ROLE permission

router.delete("/archive-assessment/:id", (req, res) => {

});

// TODO: read all DOCUMENTS for any DOG with correct ROLE permission

router.get("/documents", (req, res) => {

});

// TODO: read all DOCUMENTS for own DOG with correct ROLE permission

router.get("/documents/:id", (req, res) => {

});

// TODO: create DOCUMENT for DOG with correct ROLE permission

router.post("/add-document/:id", (req, res) => {

});

// TODO: update DOCUMENT for DOG with correct ROLE permission

router.put("/update-document/:id", (req, res) => {

});

// TODO: delete DOCUMENT for DOG with correct ROLE permission

router.delete("/archive-doc/:id", (req, res) => {

});

// TODO: create MEDI_STATUS for DOG with correct ROLE permission

router.post("/medi-status", (req, res) => {

});

// read MEDI_STATUS for DOG with correct ROLE permission
router.get("/medi-status/:id", (req, res) => {
    const permission = ac.can(req.roles).readOwn("Dog");
    if (permission.granted) {
        db.MediStatus
            .findOne({include: {model:db.Dog, where: {id:req.params.id}}})
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update a Medical Status"});
});

// update MEDI_STATUS for DOG with correct ROLE permission

router.put("/medi-status/:id", (req, res) => {
    const permission = ac.can(req.roles).updateOwn("Dog");
    if (permission.granted) {
        db.MediStatus
            .findOne({include: {model:db.Dog, where: {id:req.params.id}}})
            .then(medStat => res.json(permission.filter(medStat.toJSON())))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update a Medical Status"});
});

module.exports = router;