module.exports = ac => {
    ac.grant("foster").grant("rescuer").grant("placement").grant("regional").extend("foster").extend("rescuer").extend("placement")
        .createAny("Address")
        .readAny("Address")
        .updateAny("Address")
        .createAny("User")
        .readAny("User")
};