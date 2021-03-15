module.exports = ac => {
    ac.grant("Foster").grant("Rescuer").grant("Placement").grant("Regional").extend("Foster").extend("Rescuer").extend("Placement")
        .createAny("Address")
        .readAny("Address")
        .updateAny("Address")
        .readAny("AppResponse")
        .updateAny("AppResponse")
        .createAny("User")
        .readAny("User")
        .readAny("Region")
        .readAny("Alert");

    ac.grant("Admin").extend("Regional");
};