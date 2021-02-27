const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

// show all DOCUMENTS, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Document");
    if (permission.granted) {

    db.Document
      .findAll(req.query)
      .then(doc => res.json(permission.filter(doc.toJSON())))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Documentes" });
});

// show one DOCUMENT, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("Document");
    if (permission.granted) {
        db.Document
        .findByPk(req.params.id)
        .then(doc => res.json(permission.filter(doc.toJSON())))
        .catch(err => {
            console.error(err);
            res.status(422).send({ message: "Error with request" });
        });
    } else return res.status(401).send({ message: "Not authorized to view Document" });
});

// create new DOCUMENT, with correct ROLE permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Document");
    if (permission.granted) {

    db.Document
      .create(req.body)
      .then(doc => res.json(permission.filter(doc.toJSON())))
      .catch(err => {
        console.error(err)  
        res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to create a Document" });
});

// update DOCUMENT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Document");
    if (permission.granted) {
        db.Document
            .findByPk(req.params.id)
            .then(doc => doc.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized to update a Document"});
});

// delete DOCUMENT by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Document");
    if (permission.granted) {
        db.Document
            .destroy({ where: {id: req.params.id} })
            .then(deletedDocument => {
                res.sendStatus(200);
                console.log(`Document successfully deleted? 1 means yes, 0 means no: ${deletedDocument}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(401).send({ message: "Not authorized to delete a Document"});
});

module.exports = router;