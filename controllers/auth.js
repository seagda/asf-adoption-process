const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");

const router = require("express").Router();

router.post("/signup", (req, res) => bcrypt.hash(req.body.password, 8).then(hash => db.User.create({
    email: req.body.email,
    password: hash
}).then(() => res.send({ message: "User was registered succesfully!" })).catch(err => {
    // 1062 is a unique constraint violation, field is the database field that caused the error
    if (err.parent.errno === 1062) res.status(409).send({ message: err.errors[0].message, field: err.errors[0].path.substring(err.errors[0].path.lastIndexOf(".") + 1) });
    else handleErr(err, res);
})).catch(err => handleErr(err, res)));

router.post("/signin", (req, res) => db.User.findOne({ where: { email: req.body.email } }).then(user => {
    if (!user) return res.status(404).send({ message: "User not found." });

    bcrypt.compare(req.body.password, user.password).then(valid => {
        if (valid) res.status(200).send({
            id: user.id,
            email: user.email,
            accessToken: jwt.sign({ id: user.id, roles: user.roles }, process.env.SECRET, { expiresIn: 86400 })
        });
        else return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    }).catch(err => handleErr(err, res));
}).catch(err => handleErr(err, res)));

function handleErr(err, res) {
    console.error(err);
    res.status(500).send({ message: err.message });
}

module.exports = router;