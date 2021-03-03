const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

const STATIC_IDS = require("../scripts/staticIds");

// get all info for dashboard
router.get("/", (req, res) => {
    const permissionOwnAlerts = ac.can(req.roles).readOwn("Alert");
    const permissionAnyDog = ac.can(req.roles).readAny("Dog");
    const permissionAnyAppResponse = ac.can(req.roles).readAny("AppResponse");
    const permissionAnyUser = ac.can(req.roles).readAny("User");
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
            if (permissionAnyUser.granted) {
                dashboardPromises[5] = db.User.findAll({ include: [{ association: "currentlyWith" }, { model: db.Role, where: { id: STATIC_IDS.ROLES.FOSTER } }] });
                dashboardPromises[6] = db.User.findAll({ include: [{ association: "currentlyWith" }, { model: db.Role, where: { id: STATIC_IDS.ROLES.ADOPTER } }] });
            }
            if (permissionOwnDog.granted) {
                dashboardPromises[7] = user.getCurrentlyWith({ order: ["DogStatusId"] });
            }

            return Promise.all(dashboardPromises);
        })
        .then(([Alerts, dogStatusCounts, totalMaxCapacity, totalDogsInOurCare, pendingAppCounts, fosters, adopters, myDogs]) => {
            const dashboardData = {};
            if (Alerts) dashboardData.alerts = permissionOwnAlerts.filter(Alerts);
            if (dogStatusCounts) dashboardData.dogStatusCounts = dogStatusCounts.map(statusCount => ({ status: statusCount.name, number: statusCount.count }));
            if (totalMaxCapacity !== undefined) dashboardData.totalMaxCapacity = totalMaxCapacity;
            if (totalDogsInOurCare !== undefined) dashboardData.totalDogsInOurCare = totalDogsInOurCare;
            if (pendingAppCounts) dashboardData.pendingAppCounts = pendingAppCounts;
            if (fosters) {
                const fostersWithSpace = fosters.filter(foster => foster.currentlyWith.length < foster.maxCapacity);
                dashboardData.fosterCounts = [
                    { status: "Pending Applications", number: (pendingAppCounts.find(appCount => appCount.name === "foster") || { count: 0 }).count },
                    { status: "Available Fosters", number: fostersWithSpace.length },
                    { status: "Full Fosters", number: fosters.length - fostersWithSpace.length }
                ];
            }
            if (adopters) {
                const adoptersWithSpace = adopters.filter(adopter => adopter.currentlyWith.length < adopter.maxCapacity);
                dashboardData.adopterCounts = [
                    { status: "Pending Applications", number: (pendingAppCounts.find(appCount => appCount.name === "adopter") || { count: 0 }).count },
                    { status: "Available Adopters", number: adoptersWithSpace.length },
                    { status: "Full Adopters", number: adopters.length - adoptersWithSpace.length }
                ];
            }
            if (myDogs) dashboardData.myDogs = permissionOwnDog.filter(myDogs);
            res.json(dashboardData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Tell John to check the server logs" });
        });
});

module.exports = router;