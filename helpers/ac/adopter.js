module.exports = ac => {
    ac.grant("User").grant("Adopter").extend("User")
        .updateOwn("Dog", ["*", "!DogStatus", "!DogStatusId"])
        .createOwn("ExtContact")
        .readOwn("ExtContact")
        .updateOwn("ExtContact")
};