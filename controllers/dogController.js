const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionAny = ac.can(req.roles).readAny("Dog");
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    if (permissionAny.granted) {
        db.Dog.findAll({ include: [{ model: db.User, include: db.Address }, { model: db.ExtContact, include: db.Address }] }).then(dogs => {
            const dogRes = dogs.map(dog => {
                const dogJson = permissionAny.filter(dog.toJSON());
                if (dogJson.currentlyWithId) {
                    dogJson.city = dogJson.User.Address.city;
                    dogJson.state = dogJson.User.Address.state;
                } else {
                    dogJson.city = dogJson.ExtContact.Address.city;
                    dogJson.state = dogJson.ExtContact.Address.state;
                }
                const { User, ExtContact, ...dogToSend} = dogJson;
                return dogToSend;
            });
            console.log(dogRes);
            res.json(dogRes);
        });
    } else if (permissionOwn.granted) {

    } else return status(401).send({ message: "Not authorized to view dogs" });
});

// show one DOG, with correct ROLE permission

// create new DOG, with correct ROLE permission

// update DOG by id, with correct ROLE permission

// delete DOG by id, with correct ROLE permission


module.exports = router;

/*
TODO: Here are the routes to create for dog

/add-document
/add-event
/archive
/assess
/assign
/edit-detail
/med-status
/rename

*/