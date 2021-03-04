module.exports = ac => {
    ac.grant("adopter").grant("foster").extend("adopter")
        .readAny("User", "!blocked", "!adminNotes")
        .updateOwn("Dog", ["DogStatus", "DogStatusId"])
        .readAny("AppResponseAdopter")
        .createAny("BehavorialAssessment")
        .readAny("BehavorialAssessment")
        .readAny("AssessQuestion")
};