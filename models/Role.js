module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        name: { type: DataTypes.STRING, allowNull: false, unique: true }
    }, { paranoid: false });
    return Role;
};


