const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all REGIONS, if user's ROLE has correct permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("Region");
    if (permission.granted) {

    db.Region
      .findAll({where: req.query})
        .then(regions => res.json(regions.map(region => permission.filter(region.toJSON()))))
      .catch(err => {
          console.error(err)
          res.status(422).send({ message: "Error with request" })
    });

    } else return res.status(401).send({ message: "Not authorized to view Region" });
});

// create a new REGION, if user's ROLE has correct permission
router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Region");
    if (permission.granted) {

    db.Region
      .create(permission.filter(req.body))
      .then(() => res.status(200).send({message: "Region successfully created"}))
      .catch(err => {
        console.error(err)  
        res.status(500).send({ message: "Server error returned" })
    });

    } else return res.status(401).send({ message: "Not authorized to create a Region" });
});

// update an existing REGION, if user's ROLE has correct permission
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("Region");
    if (permission.granted) {
        db.Region
            .findByPk(req.params.id)
            .then(region => region.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(401).send({ message: "Not authorized update a Region"});
});

// delete a REGION, if user's ROLE has correct permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Region");
    if (permission.granted) {
        db.Region
            .destroy({ where: {id: req.params.id} })
            .then(deletedRegion => {
                res.sendStatus(200);
                console.log(`Region successfully deleted? 1 means yes, 0 means no: ${deletedRegion}`)})
            .catch(err => {
                console.error(err)
                res.status(422).send({ message: "Error with request"})
            });
    } else return res.status(401).send({ message: "Not authorized to delete a Region"});
});

module.exports = router;