module.exports = ac => {
    ac.grant("Regional").grant("SuperAdmin").extend("Regional")
        .createAny("Alert")
        .readAny("Alert")
        .deleteAny("Alert")
        .createAny("AppQuestion")
        .readAny("AppQuestion")
        .updateAny("AppQuestion")
        .createAny("AppQuestionCategory")
        .readAny("AppQuestionCategory")
        .updateAny("AppQuestionCategory")
        .createAny("AppTypes")
        .readAny("AppTypes")
        .updateAny("AppTypes")
        .createAny("AssessQuestion")
        .readAny("AssessQuestion")
        .updateAny("AssessQuestion")
        .deleteAny("BehavioralAssessment")
        .deleteAny("Document")
        .createAny("Region")
        .updateAny("Region")
        .deleteAny("Region")

        .updateAny("User")    
};