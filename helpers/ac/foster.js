module.exports = ac => {
    ac.grant("adopter").grant("foster").extend("adopter")
        .readAny("User", "!blocked", "!adminNotes")
        .readAny("AppResponse")
        .createAny("BehavorialAssessment")
        .readAny("BehavorialAssessment")
        .readAny("AssessQuestion")
};