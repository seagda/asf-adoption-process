const db = require("../models");

module.exports.get = (id) => db.User.findByPk(id, {
    include: [
        db.Role, db.Address,
        { association: "ResidesInRegion" }, { association: "AssignedRegions" }
    ]
}).then(user => user.toJSON());