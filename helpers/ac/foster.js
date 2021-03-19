module.exports = ac => {
    ac.grant("Adopter").grant("Foster").extend("Adopter")
        .readAny("User", ["!blocked", "!adminNotes"])
        .updateOwn("Dog", ["DogStatus", "DogStatusId"])
        .readAny("Document", ["id", "name", "DogId", "MediStatusId", "createdAt"])
        .readAny("AppResponseAdopter")
        .createAny("BehavioralAssessment")
        .readAny("BehavioralAssessment")
        .readAny("AssessQuestion")
};