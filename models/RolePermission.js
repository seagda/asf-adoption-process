module.exports = (sequelize, DataTypes) => {
    return sequelize.define("RolePermission", {
        region_lock: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
};