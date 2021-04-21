const db = require("../models");

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client();

module.exports.getWithCoords = address => {
    return client.geocode({ params: { address: Object.values((({ lat, long, ...address }) => address)(address)).join(","), key: process.env.GOOGLE_MAPS_API_KEY } })
        .then(res => ({ ...address, ...res.data.results[0].geometry.location }));
}

module.exports.create = address => {
    return this.getWithCoords(address).then(withCoords => db.Address.create(withCoords));
}

module.exports.update = address => {
    return Promise.all([db.Address.findByPk(address.id), this.getWithCoords(address)])
        .then(([Address, withCoords]) => Address.update(withCoords));
}