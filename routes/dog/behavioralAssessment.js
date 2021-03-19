const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();

// get all ALL BEHAVIORAL ASSESSMENT QUESTIONS
router.get("/questions", (req, res) => {
    db.AssessQuestionCategory.findAll({ include: [db.AssessQuestion] }).then(categories => res.json(categories.map(category => ({
        title: category.name,
        type: "panel",
        name: `panel${category.id}`,
        questions: category.AssessQuestions.map(question => ({ name: question.desc, title: question.desc, type: "rating", rateMin: 0, rateMax: 5 }))
    }))))
});

// create new BEHAVIORAL ASSESSMENT, with correct ROLE permission
router.post("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).createOwn("BehavioralAssessment");
    const permissionAny = ac.can(req.roles).createAny("BehavioralAssessment");
    if (permissionOwn.granted || permissionAny.granted) {
        db.Dog.findByPk(req.params.id)
            .then(dog => {
                let behAssJson;
                if (dog.CurrentlyWithId === req.userId) {
                    behAssJson = permissionOwn.filter(req.body)
                } else if (permissionAny.granted) {
                    behAssJson = permissionAny.filter(req.body)
                } else return res.status(403).send({ message: "you can't create assessments" })

                dog
                    .createBehavioralAssessment({ ...behAssJson, UserId: req.userId })
                    .then(() => res.status(200).send({ message: "Behavioral Assessment successfully created" }))
                    .catch(err => {
                        console.error(err)
                        res.status(422).send({ message: "Error with request" })
                    });


            })
    } else return res.status(403).send({ message: "Not authorized to create Behavioral Assessments" })
});

// update BEHAVIORAL ASSESSMENT by id, with correct ROLE permission
router.put("/:id", (req, res) => {
    const permissionOwn = ac.can(req.roles).updateOwn("BehavioralAssessment");
    const permissionAny = ac.can(req.roles).updateAny("BehavioralAssessment");
    if (permissionOwn.granted || permissionAny.granted) {

        db.BehavioralAssessment
            .findByPk(req.params.id, { include: db.Dog })
            .then(behAss => {
                let behAssJson;
                if (behAss.Dog.CurrentlyWithId === req.userId) {
                    behAssJson = permissionOwn.filter(behAss.toJSON())
                } else if (permissionAny.granted) {
                    behAssJson = permissionAny.filter(behAss.toJSON())
                } else return res.status(403).send({ message: "you can't update this dog's assessments" });
                res.json(behAssJson);
            })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized to update Behavioral Assessments" });
});

// delete BEHAVIORAL ASSESSMENT by id, with SuperAdmin ONLY permission
router.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("BehavioralAssessment");
    if (permission.granted) {
        db.BehavioralAssessment
            .destroy({ where: { id: req.params.id } })
            .then(deletedAssess => {
                res.sendStatus(200);
                console.log(`Assessment successfully deleted? 1 means yes, 0 means no: ${deletedAssess}`)
            })
            .catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized to delete Behavioral Assessments" });
});


module.exports = router;