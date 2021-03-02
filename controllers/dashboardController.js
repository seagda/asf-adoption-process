const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

const STATIC_IDS = require("../scripts/staticIds");

// get all info for dashboard
router.get("/", (req, res) => {
    const dashboardPromises = [];
    const permissionAnyDog = ac.can(req.roles).readAny("Dog");
    if (permissionAnyDog.granted) {
        dashboardPromises[0] = db.Dog.count({ include: db.DogStatus, group: ["DogStatusId"] });
    }
    Promise.all(dashboardPromises)
        .then(([DogStatusCounts]) => {
            console.log(DogStatusCounts);
            res.json({DogStatusCounts});
        })
        .catch(console.error);
});

module.exports = router;