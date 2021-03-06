const db = require("../../models");
const ac = require("../../helpers/ac");
const controller = require("../../controllers/alert");

const router = require("express").Router();


// READ any Alert, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Alert");
    if (permission.granted) {

    db.Alert
      .findAll({where: req.query})
      .then(alerts => res.json(alerts.map(alert => permission.filter(alert.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(403).send({ message: "Not authorized to view Alerts" });
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
    } else return res.status(403).send({ message: "Not authorized to view Alerts" });
});

// create new Alert, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Alert");
    if (permission.granted) {

    db.Alert
    .create(permission.filter(req.body))
    .then(() => res.status(200).send({message: "Alert successfully created"}))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(403).send({ message: "Not authorized to create an Alert" });
});

// mark alert as read
router.put("/:id/read", (req, res) => {
    const permissionAny = ac.can(req.roles).updateAny("Alert");
    db.Alert.findByPk(req.params.id)
        .then(alert => alert.ToUserId === req.userId || (permissionAny.attributes.includes("read")) ? controller.markAsRead(alert) : false)
        .then(updated => updated ? res.sendStatus(200) : res.status(403).send({ message: "Not authorized to mark this alert as read" }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
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
    } else return res.status(403).send({ message: "Not authorized to update an Alert"});
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
    } else return res.status(403).send({ message: "Not authorized to delete an Alert"});
});

module.exports = router;
