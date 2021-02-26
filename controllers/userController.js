const jwt = require("jsonwebtoken");

const db = require("../models");
const ac = require("../helpers/ac");
const mail = require("../helpers/mail");

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
});

router.put("/", (req, res) => {
    const permission = ac.can(req.roles).updateOwn("User");
    if (permission.granted) {
        db.User.findByPk(req.userId).then(user => {
            return user.update(permission.filter(req.body));
        }).then(user => {
            console.log(user);
            res.sendStatus(200);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
    }
});

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
                // generate token, create user, and email user a link
                const createKey = jwt.sign({ email: req.body.email }, process.env.SECRET, { expiresIn: 86400 });
                // newUser is req.body without body.roles and with createKey
                const { roles, ...newUser } = { ...req.body, createKey };

                db.User.upsert(newUser).then(([user]) => {
                    // user only gets currently selected roles plus user roles
                    user.setRoles([1, ...(roles || [])]);
                    mail.sendMail({
                        from: '"Australian Shepherds Furever" <aussiesfurever@outlook.com>',
                        to: req.body.email,
                        subject: "Invitation to Australian Shepherds Furever",
                        text: `You have been invited to Australian Shepherds Furever!\nClick this link to create an account: http://localhost:3000/create-account?key=${createKey}`,
                        html: `You have been invited to Australian Shepherds Furever!<br /><a href="http://localhost:3000/create-account?key=${createKey}">Click here to create an account</a>`
                    }).then(info => {
                        console.log(info);
                        res.status(200).send({ message: "Email sent to create an account!" });
                    }).catch(err => {
                        console.error(err);
                        res.status(500).send({ message: "error sending the email" });
                    });
                }).catch(err => {
                    console.error(err);
                    res.status(500).send({ message: "error updating/creating user" });
                });
            }
        }).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
    } else return res.status(401).send({ message: "Not authorized to create a user" });
});


module.exports = router;