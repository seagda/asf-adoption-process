const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

// show all APP RESPONSES, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {

    db.AppResponse
    .findAll({where: req.query})
      .then(appResps => res.json(appResps.map(appResp => permission.filter(appResp.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view AppResponse" });
});

// show one APP RESPONSE, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
        .findByPk(req.params.id)
        .then(appResp => res.json(permission.filter(appResp.toJSON()))).catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view AppResponses" });
});

// create new APP RESPONSE, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("AppResponse");
    if (permission.granted) {

    db.AppResponse
      .create(req.body)
      .then(appResp => res.json(permission.filter(appResp.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create an AppResponse" });
});

// update APP RESPONSE by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
            .findByPk(req.params.id)
            .then(appResp => appResp.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized update an AppResponse"});
});
// delete APP RESPONSE by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
            .destroy({ where: {id: req.params.id} })
            .then(deletedAppResp => {
                res.sendStatus(200);
                console.log(`Application Response successfully deleted? 1 means yes, 0 means no: ${deletedAppResp}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an AppResponse"});
});

module.exports = router;