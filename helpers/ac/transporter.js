module.exports = ac => {
    ac.grant("User").grant("Transporter").extend("User")
};