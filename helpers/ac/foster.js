module.exports = ac => {
    ac.grant("adopter").grant("foster").extend("adopter")
        .updateOwn("Dog", ["DogStatus", "DogStatusId"])
        .readAny("User")
        .readAny("AppResponse")
        .createAny("BehavorialAssessment")
        .readAny("BehavorialAssessment")
        .updateAny("BehavorialAssessment")
        .readAny("AssessQuestion")
};