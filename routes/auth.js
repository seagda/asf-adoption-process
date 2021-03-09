const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const ac = require("../helpers/ac");

const router = require("express").Router();

router.post("/signup", (req, res) => {
    if (!(req.body.email && req.body.password && req.body.firstName && req.body.lastName && req.body.phone && req.body.Address))
        return res.status(400).send({ message: "Signup request must have an email, password, first name, last name, phone, and address" });

    bcrypt.hash(req.body.password, 8)
        .then(hash => {
            const newUser = {
                ...req.body,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                photoUrl: req.body.photoUrl,
                Address: req.body.Address,
                Auth: { password: hash }
            };

            return db.User.create(newUser, { include: [db.Auth, db.Address] });
        })
        .then(user => user.addRole(1))
        .then(() => res.send({ message: "User was registered succesfully!" }))
        .catch(err => {
            // 1062 is a unique constraint violation, field is the database field that caused the error
            if (err.parent && err.parent.errno === 1062)
                res.status(409).send({ message: err.errors[0].message, field: err.errors[0].path.substring(err.errors[0].path.lastIndexOf(".") + 1) });
            else
                handleErr(err, res);
        });
});

// route to create user with createKey
router.put("/signup/:token", (req, res) => {
    jwt.verify(req.params.token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ message: "Unauthorized!" });
        Promise.all([
            db.User.findOne({ include: [db.Role, { model: db.Auth, where: { createKey: req.params.token } }], where: { email: decoded.email } }),
            bcrypt.hash(req.body.password, 8)
        ])
            .then(([user, hash]) => {
                if (!user) return res.status(401).send({ message: "Unauthorized!" });
                const permission = ac.can(user.Roles.map(role => role.name)).updateOwn("User");
                if (permission.granted) {
                    // update user with filtered request body
                    return Promise.all([
                        user.update(permission.filter(req.body)),
                        user.Auth.update({ createKey: null, password: hash })
                    ]);
                } else throw new Error("whoops we broke something, everyone should have updateOwn user");
            })
            .then(() => res.send({ message: "Account was created successfully" }))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: err.message });
            });
    });
});

router.post("/signin", (req, res) => db.User.findOne({ where: { email: req.body.email }, include: [db.Role, db.Auth] }).then(user => {
    if (!user) return res.status(401).send({ message: "Unauthorized!" });

    bcrypt.compare(req.body.password, user.Auth.password).then(valid => {
        const roles = user.Roles.map(role => role.name);
        if (valid) res.status(200).send({
            id: user.id,
            email: user.email,
            roles,
            accessToken: jwt.sign({ id: user.id, roles }, process.env.SECRET, { expiresIn: 86400 })
        });
        else return res.status(401).send({ accessToken: null, message: "Unauthorized!" });
    }).catch(err => handleErr(err, res));
}).catch(err => handleErr(err, res)));

// access control grants object for client to use to determine which fields to show
router.get("/permissions", (req, res) => res.json(ac.getGrants()));

function handleErr(err, res) {
    console.error(err);
    res.status(500).send({ message: err.message });
}

module.exports = router;