module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define("Permission", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { paranoid: false });
    return Permission;
};