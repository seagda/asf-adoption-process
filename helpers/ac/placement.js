module.exports = ac => {
    ac.grant("user").grant("placement").extend("user")
        .readAny("Dog")
        .updateAny("Dog")
        .readAny("AppResponseAdopter")
        .updateAny("AppResponseAdopter")
        .readAny("User", "!blocked", "!adminNotes")
        .createAny("ExtContact")
        .readAny("ExtContact")
        .updateAny("ExtContact")
        .createAny("Event")
        .readAny("Event")
        .updateAny("Event")
        
};