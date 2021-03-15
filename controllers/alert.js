const db = require("../models");
const mail = require("../helpers/mail");
const STATIC_IDS = require("../scripts/staticIds");

module.exports.getAll = (filter) => db.Alert.findAll({ where: filter });

module.exports.getUnread = (filter) => db.Alert.findAll({ where: { ...filter, read: false } });

module.exports.getRead = (filter) => db.Alert.findAll({ where: { ...filter, read: true } });

module.exports.dogStatus = (dog, region) => {
    const or = [
        { "$Roles.id$": STATIC_IDS.ROLES.SUPERADMIN },
        { [db.Sequelize.Op.and]: [{ "$AssignedRegions.id$": region.id }, { "$Roles.id$": STATIC_IDS.ROLES.REGIONAL }] }
    ];
    return Promise.all([
        db.User.findAll({
            where: {
                [db.Sequelize.Op.or]: or
            }, include: [db.Role, { association: "AssignedRegions" }, db.Setting]
        }),
        dog.getDogStatus()
    ]).then(([users, dogStatus]) => Promise.all(users.map(user => {
        const message = `${dog.name} is ${dogStatus.name}`;
        const promises = [user.createAlert({ message, AboutDogId: dog.id })];
        if (user.Setting.email) promises[1] = mail.sendMail({
            from: '"Australian Shepherds Furever" <aussiesfurever@outlook.com>',
            to: user.email,
            subject: message
        })
        return Promise.all(promises);
    })))
}

module.exports.markAsRead = (alert) => alert.update({ read: true });