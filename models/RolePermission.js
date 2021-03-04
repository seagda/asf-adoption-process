module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define("RolePermission", {
        regionLock: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        write: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { paranoid: false });

    RolePermission.associate = db => {
        db.Role.hasMany(RolePermission);
        RolePermission.belongsTo(db.Role);
        db.Permission.hasMany(RolePermission);
        RolePermission.belongsTo(db.Permission);
    };

    return RolePermission;
};