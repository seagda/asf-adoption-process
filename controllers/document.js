const db = require("../models");

module.exports.getForDog = (id) => db.Dog.findByPk(id, { include: db.Document })
    .then(dog => dog.toJSON().Documents.map(document => ({ ...document, CurrentlyWithId: dog.CurrentlyWithId })));