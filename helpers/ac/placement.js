module.exports = ac => {
    ac.grant("User").grant("Placement").extend("User")
        .readAny("Dog")
        .updateAny("Dog")
        .readAny("AppResponseAdopter")
        .updateAny("AppResponseAdopter")
        .readAny("User")
        .createAny("Document", ["name", "DogId", "MediStatusId"])
        .readAny("Document", ["name", "DogId", "MediStatusId"])
        .createAny("ExtContact")
        .readAny("ExtContact")
        .updateAny("ExtContact")
        .createAny("Event")
        .readAny("Event")
        .updateAny("Event")
        
};