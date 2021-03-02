const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

const STATIC_IDS = require("../scripts/staticIds");

// get all info for dashboard
router.get("/", (req, res) => {
    const permissionOwnAlerts = ac.can(req.roles).readOwn("Alert");
    const permissionAnyDog = ac.can(req.roles).readAny("Dog");
    const permissionAnyAppResponse = ac.can(req.roles).readAny("AppResponse");
    const permissionOwnDog = ac.can(req.roles).readOwn("Dog");
    db.User.findByPk(req.userId)
        .then(user => {
            const dashboardPromises = [];
            if (permissionOwnAlerts.granted) {
                dashboardPromises[0] = user.getAlerts();
            }
            if (permissionAnyDog.granted) {
                dashboardPromises[1] = db.Dog.count({ include: db.DogStatus, group: ["DogStatusId", "DogStatus.name"] });
                dashboardPromises[2] = db.User.sum("maxCapacity");
                dashboardPromises[3] = db.Dog.count({ where: { currentlyWithId: { [db.Sequelize.Op.not]: null } } });
            }
            if (permissionAnyAppResponse.granted) {
                dashboardPromises[4] = db.AppResponse.count({ where: { AppStatusId: { [db.Sequelize.Op.lt]: STATIC_IDS.APP_STATUS.APPROVED } }, include: db.AppType, group: ["AppTypeId", "AppType.name"] });
                // none of this works the way I want it to, if at all:
                /* // dashboardPromises[1]
                db.AppType.findAll({ include: { model: db.AppResponse, where: { AppStatusId: STATIC_IDS.APP_STATUS.APPROVED }, include: db.User } }).then()
                // db.AppResponse.findAll({ where: { AppStatusId: STATIC_IDS.APP_STATUS.APPROVED }, include: db.User }).then(appResponses => {
                //     appResponses.forEach(appResponse => appResponse.User.getAvailableCapacity())
                // });
                //     // dashboardPromises[1] = db.AppResponse.findAll({include: [db.AppStatus]})
                //     db.User.findByPk(3).then(user => user.getDogsByStatus("Adopted")).then(console.log) */
            }
            if (permissionOwnDog.granted) {
                dashboardPromises[5] = user.getCurrentlyWith({ order: ["DogStatusId"] });
            }

            return Promise.all(dashboardPromises);
        })
        .then(([Alerts, dogStatusCounts, totalMaxCapacity, totalDogsInOurCare, pendingAppCounts, myDogs]) => {
            res.json({
                alerts: permissionOwnAlerts.filter(Alerts),
                dogStatusCounts: permissionAnyDog.filter(dogStatusCounts),
                totalMaxCapacity,
                totalDogsInOurCare,
                pendingAppCounts: permissionAnyAppResponse.filter(pendingAppCounts),
                myDogs: permissionOwnDog.filter(myDogs)
            });
        })
        .catch(console.error);
});

module.exports = router;