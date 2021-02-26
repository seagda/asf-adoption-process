const db = require("../models");

const ac = require("../helpers/ac");

const router = require("express").Router();

// get application questions for a certain type of application
router.get("/:typeId", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppQuestion");
    if (permission.granted) {
        // TODO: findall appquestioncategory include appquestion which will include apptype where id is typeid, then map to question panels in surveyjs format
        db.AppQuestion.findAll({ include: [db.AppQuestionCategory, { model: db.AppType, where: { id: req.params.typeId } }] }).then(questions => {
            console.log(questions);
            res.send(questions);
        });
    } else res.status(401).send({ message: "Not authorized to view application questions" });
});

module.exports = router;