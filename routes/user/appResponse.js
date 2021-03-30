const db = require("../../models");
const ac = require("../../helpers/ac");
const express = require("express");
const controllers = require("../../controllers");
const responseRouter = express.Router();
const userRouter = express.Router();
const sId = require("../../scripts/staticIds");


// show all APP RESPONSES, with correct ROLE permission
responseRouter.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {
        db.AppResponse.findAll({ attributes: { exclude: ["response"] }, where: req.query, include: [db.AppStatus, db.AppType] })
            .then(responses => res.json(responses.map(response => permission.filter(response.toJSON()))))
            .catch(err => {
                console.error(err)
                res.status(400).send({ message: "Error with request" })
            });

    } else return res.status(403).send({ message: "Not authorized to view AppResponse" });
});

// get app responses for own user
userRouter.get("/me/app-responses", (req, res) => {
    const permission = ac.can(req.roles).readOwn("AppResponse");
    if (permission.granted) {
        db.AppResponse.findAll({ attributes: { exclude: ["response"] }, where: { UserId: req.userId }, include: [db.AppStatus, db.AppType] })
            .then(responses => res.json(responses.map(response => permission.filter(response.toJSON()))))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "whoops" });
            });
    } else res.status(403).send({ message: "Not authorized to view own application responses" });
});

// get app responses by user id
userRouter.get("/:UserId/app-responses", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {
        db.AppResponse.findAll({ attributes: { exclude: ["response"] }, where: { UserId: req.params.UserId }, include: [db.AppStatus, db.AppType] })
            .then(responses => res.json(responses.map(response => permission.filter(response.toJSON()))))
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "whoops" });
            });
    } else res.status(403).send({ message: "Not authorized to view application responses for this user" });
});

// show one APP RESPONSE, with correct ROLE permission
responseRouter.get("/:id", (req, res) => {
    const permissionAny = ac.can(req.roles).readAny("AppResponse");
    const permissionOwn = ac.can(req.roles).readOwn("AppResponse");
    if (permissionAny.granted || permissionOwn.granted) {
        controllers.appResponse.get(req.params.id).then(appResp => {
            if (appResp.UserId == req.userId) res.json(permissionOwn.filter(appResp.toJSON()));
            else if (permissionAny.granted) res.json(permissionAny.filter(appResp.toJSON()));
            else return res.status(403).send({ message: "Not authorized to view this application response" });
        }).catch(err => {
            console.error(err);
            res.status(400).send({ message: "Error with request" });
        });
    } else return res.status(403).send({ message: "Not authorized to view AppResponses" });
});

// create new APP RESPONSE, with correct ROLE permission
responseRouter.post("/", (req, res) => {
    const permission = ac.can(req.roles).createOwn("AppResponse");
    if (permission.granted) {

        db.AppResponse
            .create({ response: req.body.response, AppTypeId: req.body.AppTypeId, UserId: req.userId, AppStatusId: sId.APP_STATUS.APP_RECEIVED })
            .then(() => res.status(200).send({ message: "Application successfully created" }))
            .catch(err => {
                console.error(err)
                res.status(400).send({ message: "Error with request" })
            });

    } else return res.status(403).send({ message: "Not authorized to create an AppResponse" });
});

// update APP RESPONSE by id, with correct ROLE permission
responseRouter.put("/:id", (req, res) => {
    const permission = ac.can(req.roles).updateAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
            .findByPk(req.params.id)
            // TODO: make sure app status has actually changed before sending alerts
            .then(appResp => appResp.update(permission.filter(req.body))
                .then(() => generateStatusAlerts(appResp)))
            .then(() => {
                return res.sendStatus(200);
            })
            .catch(err => {
                console.error(err);
                res.status(400).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized update an AppResponse" });
});
// delete APP RESPONSE by id, with correct ROLE permission
responseRouter.delete("/:id", (req, res) => {
    const permission = ac.can(req.roles).deleteAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
            .destroy({ where: { id: req.params.id } })
            .then(deletedAppResp => {
                res.sendStatus(200);
                console.log(`Application Response successfully deleted? 1 means yes, 0 means no: ${deletedAppResp}`)
            })
            .catch(err => {
                console.error(err);
                res.status(400).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized to delete an AppResponse" });
});

// Create alerts for AppResponses

function generateStatusAlerts(appResp) {
    appResp.getUser().then(user => {
        const or = [
            { id: user.id },
            { [db.Sequelize.Op.and]: [{ "$AssignedRegions.id$": user.ResidesInRegionId }, { "$Roles.id$": sId.ROLES.PLACEMENT }] },
            { [db.Sequelize.Op.and]: [{ "$AssignedRegions.id$": user.ResidesInRegionId }, { "$Roles.id$": sId.ROLES.REGIONAL }] }
        ];

        //Add Alert for REFERENCES COMPLETE
        if (appResp.AppStatusId == sId.APP_STATUS.REF_CHECKED || appResp.AppStatusId == sId.APP_STATUS.APPROVED) {
            or.push({ "$Roles.id$": sId.ROLES.ADMIN })
            or.push({ "$Roles.id$": sId.ROLES.SUPERADMIN })
        }

        return Promise.all([
            db.User.findAll({
                where: {
                    [db.Sequelize.Op.or]: or
                }, include: [{ association: "AssignedRegions" }, db.Role]
            }),
            appResp.getAppStatus(),
            appResp.getAppType()
        ]).then(([alertUsers, AppStatus, AppType]) => alertUsers.forEach(alertUser => alertUser.createAlert({ message: `${user.firstName} ${user.lastName}'s ${AppType.name} application: ${AppStatus.name}`, AboutUserId: user.id })))
    })
        .catch(console.error);
}

userRouter.use("/app-response", responseRouter);

module.exports = userRouter;