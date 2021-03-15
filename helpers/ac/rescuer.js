module.exports = ac => {
    ac.grant("User").grant("Rescuer").extend("User")
      .createAny("Dog")
      .readAny("Dog")
      .readAny("Event")
      .createOwn("ExtContact")
      .readOwn("ExtContact")
      .updateOwn("ExtContact")
};