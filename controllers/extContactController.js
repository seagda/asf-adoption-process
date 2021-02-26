const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all EXT_CONTACTS, if user's ROLE has correct permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("ExtContact");
    if (permission.granted) {

    db.Region
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).send({ message: "Data not a recognizable type", error:err }));

    } else {
        res.status(401).send({ message: "Not authorized to view Region" });
    }
});

// create new EXT_CONTACT, if user's ROLE has correct permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Region");
    if (permission.granted) {

    db.Region
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).send({ message: "Data not a recognizable type", error:err }));

    } else {
        res.status(401).send({ message: "Not authorized to create a Region" });
    }
});

// update existing EXT_CONTACT, if user's ROLE has correct permission
router.put("/update/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Region");
    if (permission.granted) {

        db.Region
            .update(req.body, {where: {id: req.params.id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).send({ message: "Data not a recognizable type", error:err }));
    } else {
        res.status(401).send({ message: "Not authorized update a Region"})
    }
});

// delete one EXT_CONTACT, if user's ROLE has correct permission
router.delete("/delete/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Region");
    if (permission.granted) {
        db.Region
            .destroy({ where: {id: req.params.id} })
            .then(deletedRegion => {
                res.sendStatus(200);
                console.log(`Region successfully deleted? 1 means yes, 0 means no: ${deletedRegion}`)})
            .catch(err => res.status(422).send({ message: "Data not a recognizable type", error:err }));
    } else {
        res.status(401).send({ message: "Not authorized to delete a Region"})
    }
});

module.exports = router;