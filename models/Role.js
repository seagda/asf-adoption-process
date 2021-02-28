module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });
    return Role;
};


