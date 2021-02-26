const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all EXT_CONTACTS, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("ExtContact");
    if (permission.granted) {

    db.ExtContact
      .findAll(req.query)
      .then(extCont => res.json(permission.filter(extCont.toJSON())))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view External Contacts" });
});

// show one EXT_CONTACT, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("ExtContact");
    if (permission.granted) {
        db.ExtContact
        .findByPk(req.params.id)
        .then(extCont => res.json(permission.filter(extCont.toJSON()))).catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with data request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view External Contacts" });
});

// create new EXT_CONTACT, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("ExtContact");
    if (permission.granted) {

    db.ExtContact
      .create(req.body)
      .then(extCont => res.json(permission.filter(extCont.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create External Contacts" });
});

// update EXT_CONTACT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("ExtContact");
    if (permission.granted) {
        db.ExtContact
            .findByPk(req.params.id)
            .then(extCont => extCont.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update an External Contact"});
});

// delete EXT_CONTACT by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("ExtContact");
    if (permission.granted) {
        db.ExtContact
            .destroy({ where: {id: req.params.id} })
            .then(deletedContact => {
                res.sendStatus(200);
                console.log(`Contact successfully deleted? 1 means yes, 0 means no: ${deletedContact}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an External Contact"});
});
module.exports = router;