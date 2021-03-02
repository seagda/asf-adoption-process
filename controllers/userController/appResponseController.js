const db = require("../../models");
const ac = require("../../helpers/ac");
const router = require("express").Router();
const sId = require("../../scripts/staticIds");


// show all APP RESPONSES, with correct ROLE permission
router.get("/", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {

        db.AppResponse
            .findAll({ where: req.query })
            .then(appResps => res.json(appResps.map(appResp => permission.filter(appResp.toJSON()))))
            .catch(err => {
                console.error(err)
                res.status(422).send({ message: "Error with request" })
            });

    } else return res.status(403).send({ message: "Not authorized to view AppResponse" });
});

// show one APP RESPONSE, with correct ROLE permission
router.get("/:id", (req, res) => {
    const permission = ac.can(req.roles).readAny("AppResponse");
    if (permission.granted) {
        db.AppResponse
            .findByPk(req.params.id)
            .then(appResp => res.json(permission.filter(appResp.toJSON()))).catch(err => {
                console.error(err);
                res.status(422).send({ message: "Error with request" });
            });
    } else return res.status(403).send({ message: "Not authorized to view AppResponses" });
});

// create new APP RESPONSE, with correct ROLE permission
router.post("/", (req, res) => {
    const permission = ac.can(req.roles).createOwn("AppResponse");
    if (permission.granted) {

        db.AppResponse
            .create({ ...permission.filter(req.body), UserId: req.userId })
            .then(() => res.status(200).send({ message: "Application successfully created" }))
            .catch(err => {
                console.error(err)
                res.status(422).send({ message: "Error with request" })
            });

    } else return res.status(403).send({ message: "Not authorized to create an AppResponse" });
});

// update APP RESPONSE by id, with correct ROLE permission
router.put("/:id", (req, res) => {
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
                res.status(422).send({ message: "Error with request" })
            });
    } else return res.status(403).send({ message: "Not authorized update an AppResponse" });
});
// delete APP RESPONSE by id, with correct ROLE permission
router.delete("/:id", (req, res) => {
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
                res.status(422).send({ message: "Error with request" })
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
        ]).then(([alertUsers, AppStatus, AppType]) => alertUsers.forEach(alertUser => alertUser.createAlert({ message: `${user.firstName} ${user.lastName}'s ${AppType.name} application: ${AppStatus.name}`, aboutUserId: user.id })))
    })
        .catch(console.error);
}

module.exports = router;