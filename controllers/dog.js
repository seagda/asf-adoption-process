// const db = require("../models");
const STATIC_IDS = require("../scripts/staticIds");
const alertController = require("./alert");

/* module.exports.getAll = () => {

} */

module.exports.update = (dog, updates) => { };

module.exports.updateCurrentlyWith = (dog, CurrentlyWithId) => { };

module.exports.updateStatus = (dog, DogStatusId) => Promise.resolve(dog.DogStatusId == DogStatusId ? false : Promise.all([dog.update({ DogStatusId }), dog.getRegion()]))
    .then(updated => updated ? alertController.dogStatus(updated[0], updated[1]) : false);

module.exports.updateName = (dog, name) => { };