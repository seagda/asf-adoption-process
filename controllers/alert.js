const db = require("../models");
const mail = require("../helpers/mail");

module.exports.notifyUsers = alerts => Promise.all(alerts.map(alert => alert.getToUser({ include: db.Setting })))
    .then(users => {
        for (let i = 0; i < alerts.length; i++) {
            if (users[i].Setting.email) mail.sendMail({
                from: '"Australian Shepherds Furever" <aussiesfurever@outlook.com>',
                to: users[i].email,
                subject: alerts[i].message,
                text: alerts[i].message,
                html: alerts[i].message
            })
        }
    })
    .catch(console.error)