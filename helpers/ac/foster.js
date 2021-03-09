module.exports = ac => {
    ac.grant("Adopter").grant("Foster").extend("Adopter")
        .readAny("User", "!blocked", "!adminNotes")
        .updateOwn("Dog", ["DogStatus", "DogStatusId"])
        .readAny("AppResponseAdopter")
        .createAny("BehavorialAssessment")
        .readAny("BehavorialAssessment")
        .readAny("AssessQuestion")
};