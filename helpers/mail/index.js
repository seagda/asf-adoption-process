const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
        user: "aussiesfurever@outlook.com",
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports = transporter;