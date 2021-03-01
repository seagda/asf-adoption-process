module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { paranoid: false });
    return Role;
};


