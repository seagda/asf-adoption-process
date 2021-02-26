module.exports = ac => {
    ac.grant("rescuer").extend("user")
      .createAny("Dog")
      .readAny("Dog")
      .readAny("Alert")
      .readAny("Event")
      .createOwn("ExtContact")
      .readOwn("ExtContact")
      .updateOwn("ExtContact")
};