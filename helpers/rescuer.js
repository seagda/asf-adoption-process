module.exports = ac => {
    ac.grant("rescuer").extend("user")
      .createAny("Dog")
      .readAny("Dog");
}