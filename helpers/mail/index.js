const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "aussiesfurever.info@gmail.com",
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports = transporter;