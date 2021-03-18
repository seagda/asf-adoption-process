module.exports = ac => {
    ac.grant("Regional").grant("Admin").extend("Regional")
        .createAny("Alert")
        .readAny("Alert")
        .deleteAny("Alert")
        .createAny("AppQuestion")
        .readAny("AppQuestion")
        .readAny("AppQuestionCategory")
        .readAny("AppTypes")
        .readAny("AssessQuestion")
        .deleteAny("BehavioralAssessment")
        .deleteAny("Document")
        .updateAny("User")    
};