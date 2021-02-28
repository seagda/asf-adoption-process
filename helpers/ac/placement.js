module.exports = ac => {
    ac.grant("placement").extend("user")
        .readAny("Dog")
        .updateAny("Dog")
        .readAny("Alert")
        .readAny("AppResponse")
        .updateAny("AppResponse")
        .readAny("User", "!blocked", "!adminNotes")
        .createAny("ExtContact")
        .readAny("ExtContact")
        .updateAny("ExtContact")
        .createAny("Event")
        .readAny("Event")
        .updateAny("Event")
        
};