const db = require("../models");

const ac = require("../helpers/ac");

const router = require("express").Router();

// get application questions for a certain type of application
router.get("/:typeId", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppQuestion");
    if (permission.granted) {
        db.AppQuestion.findAll({ include: db.AppType })
    } else {
        res.status(401).send({ message: "Not authorized to view application questions" });
    }
});

module.exports = router;