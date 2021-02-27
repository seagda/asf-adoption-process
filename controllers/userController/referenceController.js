const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();


// READ any Reference, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Reference");
    if (permission.granted) {

    db.Reference
      .findAll({where: req.query})
      .then(refs => res.json(refs.map(ref => permission.filter(ref.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view References" });
});


// READ one Reference, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Reference");
    if (permission.granted) {
        db.Reference
        .findByPk(req.params.id)
        .then(reference => res.json(permission.filter(reference.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view References" });
});

// create new Reference, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Reference");
    if (permission.granted) {

    db.Reference
      .create(permission.filter(req.body))
      .then(() => res.status(200).send({message: "Reference successfully created"}))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create an Reference" });
});

// update Reference by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Reference");
    if (permission.granted) {
        db.Reference
            .findByPk(req.params.id)
            .then(reference => reference.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update an Reference"});
});

// delete Reference by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Reference");
    if (permission.granted) {
        db.Reference
            .destroy({ where: {id: req.params.id} })
            .then(deletedReference => {
                res.sendStatus(200);
                console.log(`Reference successfully deleted? 1 means yes, 0 means no: ${deletedReference}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an Reference"});
});

module.exports = router;
