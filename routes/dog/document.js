const db = require("../../models");
const ac = require("../../helpers/ac");
const controllers = require("../../controllers");
const router = require("express").Router();

// create new DOCUMENT, with correct ROLE permission
router.post("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).createOwn("Document");
    const permissionAny = ac.can(req.roles).createAny("Document");
    db.Dog.findByPk(req.params.id)
    .then(dog => {
        if (permissionOwn.granted || permissionAny.granted) {
            let docJson;
            if (dog.currentlyWithId === req.userId) {
                docJson = permissionOwn.filter(req.body)
            } else if (permissionAny.granted) {
                docJson = permissionAny.filter(req.body)
            } else return res.status(403).send({ message: "you can't create assessments" })
    
        dog
          .createDocument(docJson) 
          .then(() => res.status(200).send({message: "DOCUMENT successfully created"}))
          .catch(err => {
            console.error(err)  
            res.status(422).send({ message: "Error with request" })
        });
    
        } else return res.status(403).send({ message: "Not authorized to create DOCUMENTs" })

    })
});

// update DOCUMENT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("Document");
    const permissionAny = ac.can(req.roles).updateAny("Document");
    if (permissionOwn.granted || permissionAny.granted) {
        
        db.Document
        .findByPk(req.params.id, {include: db.Dog})
            .then(doc => {
                let docJson;
                if (doc.Dog.currentlyWithId === req.userId) {
                    docJson = permissionOwn.filter(doc.toJSON())
                } else if (permissionAny.granted) {
                    docJson = permissionAny.filter(doc.toJSON())
                } else return res.status(403).send({ message: "you can't update this dog's assessments" });
                res.json(docJson);
            })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized to update DOCUMENTs"});
});

// delete DOCUMENT by id, with SuperAdmin ONLY permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Document");
    if (permission.granted) {
        db.Document
            .destroy({ where: {id: req.params.id} })
            .then(deletedDoc => {
                res.sendStatus(200);
                console.log(`Assessment successfully deleted? 1 means yes, 0 means no: ${deletedDoc}`)})
            .catch(err => {
                console.error(err);
              res.status(422).send({ message: "Error with request" })
        });
    } else return res.status(403).send({ message: "Not authorized to delete DOCUMENTs"});
});


module.exports = router;