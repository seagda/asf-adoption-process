module.exports = ac => {
    ac.grant("placement").extend("user")
        .readAny("Dog")
        .updateAny("Dog")
        .readAny("AppResponse")
        .updateAny("AppResponse")
        .readAny("User")
        .createAny("Event")
        .readAny("Event")
        .updateAny("Event")
};