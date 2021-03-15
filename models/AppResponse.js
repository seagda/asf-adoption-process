module.exports = (sequelize, DataTypes) => {
    const AppResponse = sequelize.define("AppResponse", {
        response: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });

    AppResponse.associate = db => {
        db.AppType.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.AppType);

        db.AppStatus.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.AppStatus);

        db.User.hasMany(AppResponse, { foreignKey: { allowNull: false } });
        AppResponse.belongsTo(db.User);

        db.Dog.hasMany(AppResponse, { as: "AppsFor", foreignKey: "ForDogId" });
        AppResponse.belongsTo(db.Dog, { as: "ForDog", foreignKey: "ForDogId" });
    };

    return AppResponse;
};