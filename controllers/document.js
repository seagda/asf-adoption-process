const db = require("../models");

const storage = new (require("@google-cloud/storage")).Storage();
const docsBucket = storage.bucket("dog-dossier-documents");

module.exports.get = (id) => db.Document.findByPk(id, { include: db.Dog })
    .then(doc => {
        if (!doc) throw new Error("Document not found");
        const file = docsBucket.file(`${doc.DogId}/${doc.name}`);
        return Promise.all([doc, file, file.getMetadata()]);
    });

module.exports.create = (DogId, file) => {
    const gcsFile = docsBucket.file(`${DogId}/${file.name}`);
    return Promise.all([gcsFile.exists(), db.Document.findOne({ where: { DogId, name: file.name } })]).then(([exists, doc]) => {
        if (exists[0] && doc) throw new Error("File already exists");
        else if (doc) return doc;
        return gcsFile.save(file.data);
    }).then(doc => doc || db.Document.create({ DogId, name: file.name }));
};

module.exports.getForDog = (id) => db.Dog.findByPk(id, { include: db.Document })
    .then(dog => ({ documents: dog.toJSON().Documents, CurrentlyWithId: dog.CurrentlyWithId }));