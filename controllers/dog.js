const db = require("../models");
const ac = require("../helpers/ac");

const router = require("express").Router();

router.post("/new", (req, res) => {
    const permission = ac.can(req.roles).createAny("Dog");
    if (permission.granted) {
// TODO: use sequelize dog model to create dog using req body

    } else {
//TODO: send 401 unauthorized
    }
    })

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

module.exports = router;