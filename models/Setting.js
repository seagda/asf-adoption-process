module.exports = (sequelize, DataTypes) => sequelize.define("Setting", {
    email: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    text: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, { paranoid: false });