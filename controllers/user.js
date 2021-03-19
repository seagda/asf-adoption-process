const db = require("../models");

const storage = new (require("@google-cloud/storage")).Storage();
const photosBucket = storage.bucket("dog-dossier-photos");

module.exports.get = (id) => db.User.findByPk(id, {
    include: [
        db.Role, db.Address,
        { association: "ResidesInRegion" }, { association: "AssignedRegions" }
    ]
}).then(user => user.toJSON());

module.exports.getProfilePhoto = (id) => {
    const photo = photosBucket.file(`user/${id}`);
    return Promise.all([photo, photo.getMetadata()]);
};