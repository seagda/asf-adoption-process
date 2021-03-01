module.exports = ac => {
    ac.grant("adopter").extend("user")
        .updateOwn("Dog", ["*", "!DogStatus", "!DogStatusId"])
        .createOwn("ExtContact")
        .readOwn("ExtContact")
        .updateOwn("ExtContact")
};