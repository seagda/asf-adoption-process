module.exports = ac => {
    ac.grant("superAdmin").extend("regional")
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
        .createAny("Region")
        .readAny("Region")
        .updateAny("Region")
        .deleteAny("Region")
        .updateAny("User")    
};