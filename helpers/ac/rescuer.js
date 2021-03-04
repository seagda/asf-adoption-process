module.exports = ac => {
    ac.grant("user").grant("rescuer").extend("user")
      .createAny("Dog")
      .readAny("Dog")
      .readAny("Event")
      .createOwn("ExtContact")
      .readOwn("ExtContact")
      .updateOwn("ExtContact")
};