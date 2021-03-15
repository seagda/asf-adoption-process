module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        name: { type: DataTypes.STRING, allowNull: false, unique: true }
    }, { paranoid: false });

    Role.associate = db => {
        Role.hasMany(db.Access);
        db.Access.belongsTo(Role);
    };

    return Role;
};