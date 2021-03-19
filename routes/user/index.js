const jwt = require("jsonwebtoken");

const db = require("../../models");
const ac = require("../../helpers/ac");
const mail = require("../../helpers/mail");
const controllers = require("../../controllers");
const router = require("express").Router();

router.use("/alert", require("./alert"));
router.use("/app-response", require("./appResponse"));
router.use("/family", require("./familymember"));
router.use("/reference", require("./reference"));

// get all users
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("User");
    if (permission.granted) {
        db.User.findAll({ include: [db.Address, { association: "ResidesInRegion" }, db.Role] })
            .then(users => res.json(permission.filter(users.map(user => {
                userJson = user.toJSON();
                return {
                    id: userJson.id,
                    firstName: userJson.firstName,
                    lastName: userJson.lastName,
                    email: userJson.email,
                    city: userJson.Address ? userJson.Address.city : "No Address",
                    state: userJson.Address ? userJson.Address.state : "--",
                    ResidesInRegion: userJson.ResidesInRegion,
                    Roles: userJson.Roles.filter(role => role.name !== "User")
                }
            }))))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "error getting users from the database" });
            });
    } else return res.status(403).send({ message: "not authorized to view all users" });
});

router.get("/me/photo", (req, res) => {
    controllers.user.getProfilePhoto(req.userId).then(([photo, metadata]) => {
        res.set({ "Content-Type": metadata[0].contentType });
        photo.createReadStream().pipe(res);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.post("/me/photo", require("express-fileupload")(), (req, res) => {
    if (ac.can(req.roles).updateOwn("User").granted) controllers.user.setProfilePhoto(req.userId, req.files.photo)
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

// get own user data
router.get("/me", (req, res) => {
    controllers.user.get(req.userId)
        .then(user => res.json({
            ...ac.can(req.roles).readOwn("User").filter(user),
            editable: ac.can(req.roles).updateOwn("User").attributes
        }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error finding this user" });
        });
});

// edit own user data
router.put("/me", (req, res) => {
    const permission = ac.can(req.roles).updateOwn("User");
    if (permission.granted) {
        db.User.findByPk(req.userId)
            .then(user => user.update(permission.filter(req.body), { include: [db.Address] }))
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
                    return db.User.create({ ...permission.filter(req.body), Auth: { createKey }, Setting: {} }, { include: [db.Auth, db.Setting] });
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

router.get("/:id/photo", (req, res) => {
    controllers.user.getProfilePhoto(req.params.id).then(([photo, metadata]) => {
        res.set({ "Content-Type": metadata[0].contentType });
        photo.createReadStream().pipe(res);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.post("/:id/photo", require("express-fileupload")(), (req, res) => {
    if (ac.can(req.roles).updateAny("User").granted) controllers.user.setProfilePhoto(req.params.id, req.files.photo)
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

// view user profile by id
router.get("/:id", (req, res) => {
    const permissionRead = ac.can(req.roles).readAny("User");
    const permissionUpdate = ac.can(req.roles).updateAny("User");
    if (permissionRead.granted) controllers.user.get(req.params.id)
        .then(user => res.json({ ...permissionRead.filter(user), editable: permissionUpdate.attributes }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
    else return res.status(403).send({ message: "Not authorized to view this user" });
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