const db = require("../models");
const alertController = require("./alert");

module.exports.getAll = (originFilter, withFilter, regionFilter) => db.Dog.findAll({
    include: [
        db.DogStatus,
        { association: "Origin", where: originFilter, include: [db.Address, { model: db.Region, where: regionFilter }] },
        { association: "CurrentlyWith", where: withFilter, include: [db.Address, { association: "ResidesInRegion", where: regionFilter }] },
        { model: db.DogPhoto, required: false, where: { profilePhoto: true } }
    ]
}).then(dogs => dogs.map(dog => {
    const dogJson = dog.toJSON();
    if (dogJson.CurrentlyWithId) {
        dogJson.Address = dogJson.CurrentlyWith.Address;
        dogJson.Region = dogJson.CurrentlyWith.ResidesInRegion;
    } else {
        dogJson.Address = dogJson.Origin.Address;
        dogJson.Region = dogJson.Origin.Region;
    }
    return dogJson;
}));

module.exports.update = (dog, updates) => { };

module.exports.updateCurrentlyWith = (dog, CurrentlyWithId) => { };

module.exports.updateStatus = (dog, DogStatusId) => Promise.resolve(dog.DogStatusId == DogStatusId ? false : Promise.all([dog.update({ DogStatusId }), dog.getRegion()]))
    .then(updated => updated ? alertController.dogStatus(updated[0], updated[1]) : false);

module.exports.updateName = (dog, name) => { };