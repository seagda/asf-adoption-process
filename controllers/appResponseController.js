const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();


router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createOwn("AppResponse");
    if (permission.granted) {
// TODO: use sequelize model to create AppResponse using req body

    } else {
        res.status(401).send({ message: "Not authorized to create an Application" });
    }
    });


module.exports = router;

// Admin can update only the status_id within and app response
