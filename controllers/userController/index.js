const jwt = require("jsonwebtoken");

const db = require("../../models");
const ac = require("../../helpers/ac");
const mail = require("../../helpers/mail");

const router = require("express").Router();

router.use("/alert", require("./alertController"));
router.use("/app-response", require("./appResponseController"));
router.use("/family", require("./familymemberController"));
router.use("/reference", require("./referenceController"));

// root get route is own user data
router.get("/", (req, res) => {
    // everyone has this permission but we check to get the filter
    const permission = ac.can(req.roles).readOwn("User");
    if (permission.granted) {
        db.User.findByPk(req.userId).then(user => res.json(permission.filter(user.toJSON()))).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Server error finding this user" });
        });
    } else return res.status(403).send({ message: "whoops we broke something, everyone should have readOwn user" });
});

// edit own user data
router.put("/", (req, res) => {
    const permission = ac.can(req.roles).updateOwn("User");
    if (permission.granted) {
        db.User.findByPk(req.userId)
            .then(user => user.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else return res.status(403).send({ message: "whoops we broke something, everyone should have updateOwn user" });
});

// Create user route for an admin
router.post("/new", (req, res) => {
    // make sure they have permission to create a user
    const permission = ac.can(req.roles).createAny("User");
    if (permission.granted) {
        // one field that is absolutely required is email so we can send the create key
        if (!req.body.email) return res.status(400).send({ message: "Must specify an email to create a user" });
        const createKey = jwt.sign({ email: req.body.email }, process.env.SECRET, { expiresIn: 86400 });
        db.User.findOne({ where: { email: req.body.email }, include: db.Auth })
            .then(user => {
                if (user && user.Auth.createKey) {
                    return Promise.all([user.update(permission.filter(req.body)), user.Auth.update({ createKey })]).then(([user]) => user);
                } else if (!user) {
                    return db.User.create({ ...permission.filter(req.body), Auth: { createKey } }, { include: db.Auth });
                } else res.status(409).send({ message: "There is already an account associated with that email" });
            })
            .then(user => user.setRoles([1, ...(req.body.roles || [])]))
            .then(() => mail.sendMail({
                from: '"Australian Shepherds Furever" <aussiesfurever@outlook.com>',
                to: req.body.email,
                subject: "Invitation to Australian Shepherds Furever",
                text: `You have been invited to Australian Shepherds Furever!\nClick this link to create an account: http://localhost:3000/create-account?key=${createKey}`,
                html: `You have been invited to Australian Shepherds Furever!<br /><a href="http://localhost:3000/create-account?key=${createKey}">Click here to create an account</a>`
            }))
            .then(info => {
                console.log(info);
                res.send({ message: "Email sent to create an account!" });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Error creating and emailing user", error: err });
            });
    } else return res.status(403).send({ message: "Not authorized to create a user" });
});

// view user profile by id
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("User");
    if (permission.granted) {
        db.User.findByPk(req.params.id).then(user => res.json(permission.filter(user.toJSON()))).catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
    } else return res.status(403).send({ message: "Not authorized to view this user" });
});

// edit user by id
router.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("User");
    if (permission.granted) {
        db.User.findByPk(req.params.id)
            .then(user => user.update(permission.filter(req.body)))
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Database error" });
            });
    } else return res.status(403).send({ message: "Not authorized to edit this user" });
});


module.exports = router;