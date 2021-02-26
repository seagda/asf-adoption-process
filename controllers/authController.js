const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const ac = require("../helpers/ac");

const router = require("express").Router();

router.post("/signup", (req, res) => {
    if (!(req.body.email && req.body.password && req.body.firstName && req.body.lastName && req.body.phone))
        return res.status(400).send({ message: "Signup request must have an email, password, first name, last name, and phone" });

    bcrypt.hash(req.body.password, 8).then(hash => {
        const newUser = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            Auth: { password: hash }
        };

        if (req.body.photoUrl) newUser.photoUrl = req.body.photoUrl;

        db.User.create(newUser, { include: db.Auth })
            .then(user => user.addRole(1))
            .then(() => res.send({ message: "User was registered succesfully!" }))
            .catch(err => {
                // 1062 is a unique constraint violation, field is the database field that caused the error
                if (err.parent && err.parent.errno === 1062)
                    res.status(409).send({ message: err.errors[0].message, field: err.errors[0].path.substring(err.errors[0].path.lastIndexOf(".") + 1) });
                else
                    handleErr(err, res);
            });
    }).catch(err => handleErr(err, res));
});

// route to create user with createKey
router.put("/signup/:token", (req, res) => {
    jwt.verify(req.params.token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ message: "Unauthorized!" });
        Promise.all([db.User.findOne({ include: [db.Role, { model: db.Auth, where: { createKey: req.params.token } }], where: { email: decoded.email } }), bcrypt.hash(req.body.password, 8)])
            .then(([user, hash]) => {
                const permission = ac.can(user.Roles.map(role => role.name)).updateOwn("User");
                if (permission.granted) {
                    // update user with filtered request body plus hash as password
                    return user.update({ ...permission.filter(req.body), password: hash });
                } else return res.status(401).send({ message: "whoops we broke something, everyone should have updateOwn user" });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: err.message });
            });
    });
});

router.post("/signin", (req, res) => db.User.findOne({ where: { email: req.body.email }, include: [db.Role, db.Auth] }).then(user => {
    if (!user) return res.status(404).send({ message: "User not found." });

    bcrypt.compare(req.body.password, user.Auth.password).then(valid => {
        if (valid) res.status(200).send({
            id: user.id,
            email: user.email,
            accessToken: jwt.sign({ id: user.id, roles: user.Roles.map(role => role.name) }, process.env.SECRET, { expiresIn: 86400 })
        });
        else return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    }).catch(err => handleErr(err, res));
}).catch(err => handleErr(err, res)));

function handleErr(err, res) {
    console.error(err);
    res.status(500).send({ message: err.message });
}

module.exports = router;