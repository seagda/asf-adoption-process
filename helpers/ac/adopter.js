module.exports = ac => {
    ac.grant("user").grant("adopter").extend("user")
        .updateOwn("Dog")
        .createOwn("ExtContact")
        .readOwn("ExtContact")
        .updateOwn("ExtContact")
};