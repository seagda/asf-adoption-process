const db = require("../models");
const photoController = require("./photo");

module.exports.get = (id) => db.User.findByPk(id, {
    include: [
        db.Role, db.Address,
        { association: "ResidesInRegion" }, { association: "AssignedRegions" }
    ]
}).then(user => user.toJSON());

module.exports.getProfilePhoto = photoController.getUserProfilePhoto;

module.exports.setProfilePhoto = photoController.setUserProfilePhoto;