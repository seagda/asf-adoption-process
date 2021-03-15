const db = require("../models");
const alertController = require("./alert");

module.exports.getAll = (originFilter, withFilter, regionIdFilter) => db.Dog.findAll({
    include: [
        { association: "Origin", where: originFilter, include: [db.Address, { model: db.Region }] },
        { association: "CurrentlyWith", where: withFilter, include: [db.Address, { association: "ResidesInRegion" }] },
        { model: db.DogPhoto, required: false, where: { profilePhoto: true } }, db.DogStatus
    ],
    where: {
        [db.Sequelize.Op.or]: [
            { "$CurrentlyWith.ResidesInRegion.id$": regionIdFilter },
            { [db.Sequelize.Op.and]: [{ CurrentlyWithId: { [db.Sequelize.Op.is]: null } }, { "$Origin.Region.id$": regionIdFilter }] }]
    }
}).then(dogs => dogs.map(dog => {
    const dogJson = dog.toJSON();
    if (dogJson.CurrentlyWithId) {
        dogJson.Address = dogJson.CurrentlyWith.Address;
        dogJson.Region = dogJson.CurrentlyWith.ResidesInRegion;
    } else {
        dogJson.Address = dogJson.Origin.Address;
        dogJson.Region = dogJson.Origin.Region;
    }
    return (({ CurrentlyWith, ...dogToSend }) => dogToSend)(dogJson);
}));

module.exports.get = (id) => db.Dog.findByPk(id, {
    include: [
        { association: "Origin", include: [db.Address, { model: db.Region }] },
        { association: "CurrentlyWith", include: [db.Address, { association: "ResidesInRegion" }] },
        { association: "AppsFor" },
        db.DogPhoto, db.DogStatus, db.MicrochipMfg
    ]
}).then(dog => ({ ...dog.toJSON(), AppsFor: dog.AppsFor.length }));

module.exports.update = (dog, updates) => dog.update(updates);

module.exports.updateCurrentlyWith = (dog, CurrentlyWithId) => { };

module.exports.updateStatus = (dog, DogStatusId) => Promise.resolve(dog.DogStatusId == DogStatusId ? false : Promise.all([dog.update({ DogStatusId }), dog.getRegion()]))
    .then(updated => updated ? alertController.dogStatus(updated[0], updated[1]) : false);

module.exports.updateName = (dog, name) => Promise.resolve(dog.name == name ? false : dog.createAlias(dog.name))
    .then(alias => alias ? dog.update({ name }) : false);