module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define("RolePermission", {
        region_lock: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        write: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    RolePermission.associate = db => {
        db.Role.belongsToMany(db.Permission, { through: RolePermission });
        db.Permission.belongsToMany(db.Role, { through: RolePermission });
    };

    return RolePermission;
};