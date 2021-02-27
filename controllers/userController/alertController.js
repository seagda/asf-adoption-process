const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();


// READ any Alert, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Alert");
    if (permission.granted) {

    db.Alert
      .findAll(req.query)
      .then(alerted => res.json(permission.filter(alerted.toJSON())))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Alerts" });
});


// READ one Alert, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Alert");
    if (permission.granted) {
        db.Alert
        .findByPk(req.params.id)
        .then(alerted => res.json(permission.filter(alerted.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view Alerts" });
});

// create new Alert, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Alert");
    if (permission.granted) {

    db.Alert
      .create(req.body)
      .then(alerted => res.json(permission.filter(alerted.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create an Alert" });
});

// update Alert by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Alert");
    if (permission.granted) {
        db.Alert
            .findByPk(req.params.id)
            .then(alerted => alerted.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update an Alert"});
});

// delete Alert by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Alert");
    if (permission.granted) {
        db.Alert
            .destroy({ where: {id: req.params.id} })
            .then(deletedAlert => {
                res.sendStatus(200);
                console.log(`Alert successfully deleted? 1 means yes, 0 means no: ${deletedAlert}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an Alert"});
});

module.exports = router;
