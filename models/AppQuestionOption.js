module.exports = (sequelize, DataTypes) => {
    const AppQuestionOption = sequelize.define("AppQuestionOption", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    AppQuestionOption.associate = db => {
        db.AppQuestion.hasMany(AppQuestionOption);
        AppQuestionOption.belongsTo(db.AppQuestion);
    };

    return AppQuestionOption;
};