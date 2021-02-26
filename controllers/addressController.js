const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();


// READ any Address data, if user has permission
router.get("/", (req, res) => {
    // everyone has this permission but we check to get the filter
    const permission = ac.can(req.roles).readAny("Address");
    if (permission.granted) {
        db.Address.findByPk(req.addressId).then(user => res.json(permission.filter(address.toJSON()))).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error finding this address" });
        });
    } else return res.status(401).send({ message: "Error returning address data" });
});

router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Address");
    if (permission.granted) {
// TODO: use sequelize dog model to create address using req body

    } else {
        res.status(401).send({ message: "Not authorized to create an address" });
    }
    })



module.exports = router;
