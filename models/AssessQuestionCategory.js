module.exports = (sequelize, DataTypes) => {
    const AssessQuestionCategory = sequelize.define("AssessQuestionCategory", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true, paranoid: true });
    return AssessQuestionCategory;
};