module.exports = (sequelize, DataTypes) => {
    const AppQuestion = sequelize.define("AppQuestion", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM("boolean", "text", "number", "url", "radiogroup"),
            allowNull: false
        },
        isRequired: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // dependsOnAnswer is the answer value for the dependsOnQuestion that triggers asking this question
        dependsOnAnswer: DataTypes.INTEGER
    }, { underscored: true, paranoid: true });

    AppQuestion.associate = db => {
        db.AppQuestionCategory.hasMany(AppQuestion);
        AppQuestion.belongsTo(db.AppQuestionCategory);

        AppQuestion.hasOne(AppQuestion, { foreignKey: "dependsOnQuestion" });
    };

    return AppQuestion;
};