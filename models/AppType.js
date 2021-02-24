module.exports = (sequelize, DataTypes) => {
    const AppType = sequelize.define("AppType", {
        name: { type: DataTypes.STRING, allowNull: false }

    }, { underscored: true });

    AppType.associate = db => {
        AppType.belongsToMany(db.AppQuestion, { through: "AppTypesQuestions" });
        db.AppQuestion.belongsToMany(AppType, { through: "AppTypesQuestions" });
    };

    return AppType;
};


