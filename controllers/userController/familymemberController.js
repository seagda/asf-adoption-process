const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();


// READ any Familymember, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Familymember");
    if (permission.granted) {

    db.Familymember
      .findAll(req.query)
      .then(fam => res.json(permission.filter(fam.toJSON())))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Familymembers" });
});


// READ one Familymember, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Familymember");
    if (permission.granted) {
        db.Familymember
        .findByPk(req.params.id)
        .then(fam => res.json(permission.filter(fam.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view Familymembers" });
});

// create new Familymember, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Familymember");
    if (permission.granted) {

    db.Familymember
      .create(req.body)
      .then(fam => res.json(permission.filter(fam.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create an Familymember" });
});

// update Familymember by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Familymember");
    if (permission.granted) {
        db.Familymember
            .findByPk(req.params.id)
            .then(fam => fam.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update a Familymember"});
});

// delete Familymember by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Familymember");
    if (permission.granted) {
        db.Familymember
            .destroy({ where: {id: req.params.id} })
            .then(deletedFamily => {
                res.sendStatus(200);
                console.log(`Familymember successfully deleted? 1 means yes, 0 means no: ${deletedFamily}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete an Familymember"});
});

module.exports = router;
