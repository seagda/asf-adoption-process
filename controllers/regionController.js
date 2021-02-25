const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// create a new REGION, if user's ROLE has correct permission
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
// create a new REGION, if user's ROLE has correct permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Region");
    if (permission.granted) {
        db.Region
            .update(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).send({ message: "Data not a recognizable type", error:err }));
    } else {
        res.status(401).send({ message: "Not authorized to create a Region"})
    }
});

module.exports = router;