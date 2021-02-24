module.exports = (sequelize, DataTypes) => {
    const App_Type = sequelize.define("App_Type", {
        name: { type: DataTypes.STRING, allowNull: false }

    });

    App_Type.associate = db => {
        App_Type.belongsToMany(db.App_Question, { through: "App_Types_Questions" });
        db.App_Question.belongsToMany(App_Type, { through: "App_Types_Questions" });
    };

    return App_Type;
};


