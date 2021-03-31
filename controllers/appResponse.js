const db = require("../models");
const questionController = require("./appQuestion");

module.exports.get = (id) => db.AppResponse.findByPk(id, { include: [db.AppType, db.AppStatus, db.User, { association: "ForDog" }] })
    .then(appResponse => questionController.getForResponse(appResponse.AppTypeId, Object.keys(appResponse.response)).then(questions => ({
        ...(appResponse.toJSON()),
        questions
    })));