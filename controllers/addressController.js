const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();


// READ any ADDRESS, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Address");
    if (permission.granted) {

    db.Address
      .findAll(req.query)
      .then(address => res.json(permission.filter(address.toJSON())))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Addresses" });
});


// READ one ADDRESS, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Address");
    if (permission.granted) {
        db.Address
        .findByPk(req.params.id)
        .then(address => res.json(permission.filter(address.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view Addresses" });
});

// create new ADDRESS, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Address");
    if (permission.granted) {

    db.Address
      .create(req.body)
      .then(address => res.json(permission.filter(address.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create an Address" });
});

// update ADDRESS by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Address");
    if (permission.granted) {
        db.Address
            .findByPk(req.params.id)
            .then(address => address.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update an Address"});
});

// delete ADDRESS by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Address");
    if (permission.granted) {
        db.Address
            .destroy({ where: {id: req.params.id} })
            .then(deletedAddress => {
                res.sendStatus(200);
                console.log(`Address successfully deleted? 1 means yes, 0 means no: ${deletedAddress}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an Address"});
});

module.exports = router;
