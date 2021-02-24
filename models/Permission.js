module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define("Permission", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        write: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Permission;
};