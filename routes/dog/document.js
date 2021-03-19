const db = require("../../models");
const ac = require("../../helpers/ac");
const controllers = require("../../controllers");
const router = require("express").Router();

// get document by id
router.get("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).readOwn("Document");
    const permissionAny = ac.can(req.roles).readAny("Document");
    controllers.document.get(req.params.id).then(([doc, file, metadata]) => {
        if (!permissionAny.granted && !(permissionOwn.granted && doc.Dog.CurrentlyWithId == req.userId))
            return res.status(403).send({ message: "Not authorized to view this document" })
        res.set({
            "Content-Type": metadata[0].contentType,
            "Content-Disposition": `attachment; filename=${metadata[0].name.substring(metadata[0].name.lastIndexOf("/") + 1)}`
        });
        file.createReadStream().pipe(res);
    }).catch(err => {
        console.error(err);
        if (err.name == "Error" && err.message == "Document not found") res.sendStatus(404);
        else res.status(500).send({ message: "Server error" });
    });
});

// create new DOCUMENTs, with correct ROLE permission
router.post("/:DogId", require("express-fileupload")(), (req, res) => {
    const permissionOwn = ac.can(req.roles).createOwn("Document");
    const permissionAny = ac.can(req.roles).createAny("Document");
    Promise.resolve(permissionAny.granted || (permissionOwn.granted && db.Dog.findByPk(req.params.DogId).then(dog => dog.CurrentlyWithId === req.userId)))
        .then(granted => granted ?
            Promise.allSettled(Object.values(req.files).map(file => controllers.document.create(req.params.DogId, file)))
                .then(results => {
                    if (results.filter(result => result.status === "rejected").some(result => result.reason.message !== "File already exists")) {
                        console.error(results);
                        res.sendStatus(500);
                    }
                    res.send(results.filter(result => result.status === "fulfilled").map(result => result.value));
                }) :
            res.status(403).send({ message: "Not authorized to add documents to this dog" }))
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

// delete DOCUMENT by id, with SuperAdmin ONLY permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("Document");
    if (permission.granted) {
        controllers.document.delete(req.params.id).then(() => res.sendStatus(200)).catch(err => {
            console.error(err);
            if (err.name == "Error" && err.message == "Document not found") res.sendStatus(404);
            else res.status(500).send({ message: "Server error" });
        });
    } else return res.status(403).send({ message: "Not authorized to delete documents" });
});


module.exports = router;