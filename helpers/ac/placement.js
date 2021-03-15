module.exports = ac => {
    ac.grant("User").grant("Placement").extend("User")
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