module.exports = (sequelize, DataTypes) => {
    const AssessQuestion = sequelize.define("AssessQuestion", {
        desc: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true, paranoid: true });

    AssessQuestion.associate = db => {
        AssessQuestion.belongsTo(db.AssessQuestionCategory);
        db.AssessQuestionCategory.hasMany(AssessQuestion);
    };

    return AssessQuestion;
};