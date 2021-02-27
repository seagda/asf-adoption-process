const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

// show all BEHAVIORAL ASSESSMENTS, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("BehavioralAssessment");
    if (permission.granted) {

    db.BehavioralAssessment
      .findAll({where: req.query})
      .then(behAssessments => res.json(behAssessments.map(behAssessment => permission.filter(behAssessment.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Behavioral Assessments" });
});

// show one BEHAVIORAL ASSESSMENT, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("BehavioralAssessment");
    if (permission.granted) {
        db.BehavioralAssessment
        .findByPk(req.params.id)
        .then(behAss => res.json(permission.filter(behAss.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view Behavioral Assessments" });
});

// create new BEHAVIORAL ASSESSMENT, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("BehavioralAssessment");
    if (permission.granted) {

    db.BehavioralAssessment
      .create(req.body)
      .then(behAss => res.json(permission.filter(behAss.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create Behavioral Assessments" });
});

// update BEHAVIORAL ASSESSMENT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("BehavioralAssessment");
    if (permission.granted) {
        db.BehavioralAssessment
            .findByPk(req.params.id)
            .then(behAss => behAss.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update Behavioral Assessments"});
});

// delete BEHAVIORAL ASSESSMENT by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("BehavioralAssessment");
    if (permission.granted) {
        db.BehavioralAssessment
            .destroy({ where: {id: req.params.id} })
            .then(deletedAssess => {
                res.sendStatus(200);
                console.log(`Assessment successfully deleted? 1 means yes, 0 means no: ${deletedAssess}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete Behavioral Assessments"});
});


module.exports = router;