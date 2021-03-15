const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all EVENT, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Event");
    if (permission.granted) {

    db.Event
      .findAll({where: req.query})
      .then(evts => res.json(evts.map(evt => permission.filter(evt.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(403).send({ message: "Not authorized to view Events" });
});

// show one EVENT, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Event");
    if (permission.granted) {
        db.Event
        .findByPk(req.params.id)
        .then(evt => res.json(permission.filter(evt.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(403).send({ message: "Not authorized to view Events" });
});

// create new EVENT, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Event");
    if (permission.granted) {

    db.Event
      .create(permission.filter(req.body))
      .then(() => res.status(200).send({message: "Event successfully created"}))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(403).send({ message: "Not authorized to create an Event" });
});
// update EVENT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Event");
    if (permission.granted) {
        db.Event
            .findByPk(req.params.id)
            .then(evt => evt.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized to update an Event"});
});

// delete EVENT by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Event");
    if (permission.granted) {
        db.Event
            .destroy({ where: {id: req.params.id} })
            .then(deletedEvent => {
                res.sendStatus(200);
                console.log(`Event successfully deleted? 1 means yes, 0 means no: ${deletedEvent}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(403).send({ message: "Not authorized to delete an Event"});
});

module.exports = router;