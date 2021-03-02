const db = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
    db.Role.findAll().then(roles => res.json(roles)).catch(err => {
        console.error(err);
        res.status(500).send({ message: "something is broken" });
    });
});

module.exports = router;