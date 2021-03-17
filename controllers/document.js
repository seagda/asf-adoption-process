const db = require("../models");

const storage = new (require("@google-cloud/storage")).Storage();
const docsBucket = storage.bucket("dog-dossier-documents");

module.exports.get = (id) => db.Document.findByPk(id, { include: db.Dog })
    .then(doc => {
        if (!doc) throw new Error("Document not found");
        const file = docsBucket.file(`dog1/name.docx`);
        return Promise.all([doc, file, file.getMetadata()]);
    });

module.exports.getForDog = (id) => db.Dog.findByPk(id, { include: db.Document })
    .then(dog => ({ documents: dog.toJSON().Documents, CurrentlyWithId: dog.CurrentlyWithId }));