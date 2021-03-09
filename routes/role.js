const db = require("../models");
const router = require("express").Router();
const STATIC_IDS = require("../scripts/staticIds");

router.get("/", (req, res) => {
    db.Role.findAll({ where: { id: { [db.Sequelize.Op.ne]: STATIC_IDS.ROLES.USER } } }).then(roles => res.json(roles)).catch(err => {
        console.error(err);
        res.status(500).send({ message: "something is broken" });
    });
});

module.exports = router;