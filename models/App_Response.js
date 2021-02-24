module.exports = (sequelize, DataTypes) => {
    const App_Response = sequelize.define("App_Response", {
        response: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });

    App_Response.associate = db => {
        db.App_Type.hasMany(App_Response, { foreignKey: { allowNull: false } });
        App_Response.belongsTo(db.App_Type);

        db.App_Status.hasMany(App_Response, { foreignKey: { allowNull: false } });
        App_Response.belongsTo(db.App_Status);

        db.User.hasMany(App_Response, { foreignKey: { allowNull: false } });
        App_Response.belongsTo(db.User);
    }

    return App_Response;
};