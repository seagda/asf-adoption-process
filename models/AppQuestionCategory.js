module.exports = (sequelize, DataTypes) => {
    const AppQuestionCategory = sequelize.define("AppQuestionCategory", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });
    return AppQuestionCategory;
};


