const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

// show all DOGS, with correct ROLE permission
router.get("/", (req, res) => {
    const permissionAny = ac.can(req.roles).readAny("Dog");
    const permissionOwn = ac.can(req.roles).readOwn("Dog");
    if (permissionAny.granted) {
        
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