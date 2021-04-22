const db = require("../models");

const ac = require("../helpers/ac");

const router = require("express").Router();

// get list of application types
router.get("/types", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppType");
    if (permission.granted) db.AppType.findAll()
        .then(types => res.json(types))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Database error" });
        });
    else res.status(403).send({ message: "Not authorized to view application types" });
});

// get list of statuses
router.get("/statuses", (req, res) => {
    db.AppStatus.findAll().then(statuses => res.json(statuses)).catch(err => {
        console.error(err);
        res.status(500).send({ message: "Database error" })
    })
})

// get application questions for a certain type of application
router.get("/:type/questions", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppQuestion");
    if (permission.granted) {
        db.AppQuestionCategory.findAll({
            order: ["id", [db.AppQuestion, "position"], [db.AppQuestion, "id"]],
            include: {
                model: db.AppQuestion,
                include: [
                    db.AppQuestionOption,
                    { model: db.AppQuestion, as: "DependsOnQuestion", include: db.AppQuestionOption },
                    { model: db.AppType, where: { name: req.params.type } }]
            }
        })
            .then(categories => {
                const panels = categories.map(category => ({
                    title: category.name,
                    type: "panel",
                    name: `panel${category.id}`,
                    questions: category.AppQuestions.map(appQuestion => {
                        const question = (({ name, title, type, isRequired, position }) => ({ name, title, type, isRequired, position }))(appQuestion);
                        // number and url types are actually subtypes of text
                        if (question.type === "number" || question.type === "url") {
                            question.inputType = question.type;
                            question.type = "text";
                        } else if (question.type === "radiogroup" || question.type === "checkbox") question.choices = appQuestion.AppQuestionOptions.map(option => option.name);
                        if (appQuestion.DependsOnQuestion) {
                            question.visibleIf = `{${appQuestion.DependsOnQuestion.name}}=`
                            if (appQuestion.DependsOnQuestion.type === "boolean")
                                question.visibleIf += appQuestion.dependsOnAnswer;
                            else if (appQuestion.DependsOnQuestion.type === "radiogroup")
                                question.visibleIf += `'${appQuestion.DependsOnQuestion.AppQuestionOptions.find(option => option.id === appQuestion.dependsOnAnswer).name}'`
                        }
                        return question;
                    })
                }));
                res.json(panels);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Database access error" });
            });
    } else res.status(403).send({ message: "Not authorized to view application questions" });
});

module.exports = router;