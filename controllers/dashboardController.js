const db = require("../models");
const ac = require("../helpers/ac");
const router = require("express").Router();

const STATIC_IDS = require("../scripts/staticIds");

// get all info for dashboard
router.get("/", (req, res) => {
    const dashboardPromises = [];
    const permissionAnyDog = ac.can(req.roles).readAny("Dog");
    if (permissionAnyDog.granted) {
        dashboardPromises[0] = db.Dog.count({ include: db.DogStatus, group: ["DogStatusId", "DogStatus.name"] });
    }
    const permissionAnyAppResponse = ac.can(req.roles).readAny("AppResponse");
    if (permissionAnyAppResponse.granted) {
        dashboardPromises[1] = db.AppResponse.count({ where: { AppStatusId: { [db.Sequelize.Op.lt]: STATIC_IDS.APP_STATUS.APPROVED } }, include: db.AppType, group: ["AppTypeId", "AppType.name"] });
        dashboardPromises[2] = db.User.sum("maxCapacity", { where: { hold: false } });

        // none of this works the way I want it to, if at all:
        /* // dashboardPromises[1]
        db.AppType.findAll({ include: { model: db.AppResponse, where: { AppStatusId: STATIC_IDS.APP_STATUS.APPROVED }, include: db.User } }).then()
        // db.AppResponse.findAll({ where: { AppStatusId: STATIC_IDS.APP_STATUS.APPROVED }, include: db.User }).then(appResponses => {
        //     appResponses.forEach(appResponse => appResponse.User.getAvailableCapacity())
        // });
        //     // dashboardPromises[1] = db.AppResponse.findAll({include: [db.AppStatus]})
        //     db.User.findByPk(3).then(user => user.getDogsByStatus("Adopted")).then(console.log) */
    }
    const permissionOwnDog = ac.can(req.roles).readOwn("Dog");
    if (permissionOwnDog.granted) {
        dashboardPromises[3] = db.Dog.findAll({ where: { currentlyWithId: req.userId }, order: ["DogStatusId"] });
    }

    Promise.all(dashboardPromises)
        .then(([dogStatusCounts, pendingAppCounts, totalMaxCapacity, myDogs]) => {
            res.json({
                dogStatusCounts: permissionAnyDog.filter(dogStatusCounts),
                pendingAppCounts: permissionAnyAppResponse.filter(pendingAppCounts),
                totalMaxCapacity,
                myDogs: permissionOwnDog.filter(myDogs)
            });
        })
        .catch(console.error);
});

module.exports = router;