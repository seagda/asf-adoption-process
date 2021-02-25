const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();


router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Address");
    if (permission.granted) {
// TODO: use sequelize dog model to create address using req body

    } else {
        res.status(401).send({ message: "Not authorized to create an address" });
    }
    })



module.exports = router;
