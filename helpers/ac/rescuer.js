module.exports = ac => {
    ac.grant("User").grant("Rescuer").extend("User")
      .createAny("Dog")
      .readAny("Dog")
      .createAny("Document", ["name", "DogId", "MediStatusId"])
      .readAny("Document", ["name", "DogId", "MediStatusId"])
      .readAny("Event")
      .createOwn("ExtContact")
      .readOwn("ExtContact")
      .updateOwn("ExtContact")
};