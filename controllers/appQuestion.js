const db = require("../models");

const get = (typeWhere, questionWhere) => db.AppQuestionCategory.findAll({
    order: ["id", [db.AppQuestion, "position"], [db.AppQuestion, "id"]],
    paranoid: !!questionWhere,
    include: {
        model: db.AppQuestion,
        where: questionWhere,
        include: [
            db.AppQuestionOption,
            { model: db.AppQuestion, as: "DependsOnQuestion", include: db.AppQuestionOption },
            { model: db.AppType, where: typeWhere }
        ]
    }
}).then(categories => categories.map(category => ({
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
})));

module.exports.getForType = (type) => get({ name: type });
module.exports.getForTypeId = (typeId) => get({ id: typeId });

module.exports.getForResponse = (typeId, questionNames) => get({ id: typeId }, { name: { [db.Sequelize.Op.in]: questionNames } });