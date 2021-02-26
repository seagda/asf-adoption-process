module.exports = ac => {
    ac.grant("adopter").extend("user")
        .updateOwn("Dog")
};