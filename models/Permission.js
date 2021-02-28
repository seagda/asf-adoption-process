module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define("Permission", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { underscored: true });
    return Permission;
};