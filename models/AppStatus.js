module.exports = (sequelize, DataTypes) => {
    const AppStatus = sequelize.define("AppStatus", {
        name: { type: DataTypes.STRING, allowNull: false }

    });
    return AppStatus;
};


