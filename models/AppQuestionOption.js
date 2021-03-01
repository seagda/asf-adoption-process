module.exports = (sequelize, DataTypes) => {
    const AppQuestionOption = sequelize.define("AppQuestionOption", {
        option: {
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