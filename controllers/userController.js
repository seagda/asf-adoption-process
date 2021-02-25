const db = require("../models");

const ac = require("../helpers/ac");

const router = require("express").Router();

// root get route is own user data
router.get("/", (req, res) => {
    // everyone has this permission but we check to get the filter
    const permission = ac.can(req.roles).readOwn("User");
    if (permission.granted) {
        db.User.findByPk(req.userId).then(user => res.json(permission.filter(user))).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error finding this user" });
        });
    } else return res.status(401).send({ message: "whoops we broke something, everyone should have readOwn user" });
})

// Create user route for an admin
router.post("/new", (req, res) => {
    // make sure they have permission to create a user
    const permission = ac.can(req.roles).createAny("User");
    if (permission.granted) {
        // one field that is absolutely required is email so we can send the create key
        if (!req.body.email) return res.status(400).send({ message: "Must specify an email to create a user" });
        db.User.findOne({ where: { email: req.body.email } }).then(user => {
            // user with that email must either not exist or must already have a create key (meaning they didn't use the create key yet)
            if (user && !user.createKey) {
                return res.status(409).send({ message: "There is already an account associated with that email" });
            } else {
                // TODO: generate token and email user a link
                res.sendStatus(200);
            }
        }).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
    } else return res.status(401).send({ message: "Not authorized to create a user" });
});


module.exports = router;