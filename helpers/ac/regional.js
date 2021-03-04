module.exports = ac => {
    ac.grant("foster").grant("rescuer").grant("placement").grant("regional").extend("foster").extend("rescuer").extend("placement")
        .createAny("Address")
        .readAny("Address")
        .updateAny("Address")
        .readAny("AppResponse")
        .updateAny("AppResponse")
        .createAny("User")
        .readAny("User")
        .readAny("Region")
        .readAny("Alert");

    ac.grant("admin").extend("regional");
};