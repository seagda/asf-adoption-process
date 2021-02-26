module.exports = (sequelize, DataTypes) => {
    const AppResponse = sequelize.define("AppResponse", {
        response: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }, { underscored: true, paranoid: true });

    AppResponse.associate = db => {
        db.AppType.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.AppType);

        db.AppStatus.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.AppStatus);

        db.User.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.User);
    };

    return AppResponse;
};