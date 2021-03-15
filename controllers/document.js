const db = require("../models");

module.exports.getForDog = (id) => db.Dog.findByPk(id, { include: db.Document })
    .then(dog => ({ documents: dog.toJSON().Documents, CurrentlyWithId: dog.CurrentlyWithId }));