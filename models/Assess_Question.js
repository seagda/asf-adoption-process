module.exports = (sequelize, DataTypes) => {
    const Assess_Question = sequelize.define("Assess_Question", {
        desc: {type: DataTypes.STRING, allowNull: false}
    });

    Assess_Question.associate = db => {
        Assess_Question.belongsTo(db.Assess_Question_Category);
        db.Assess_Question_Category.hasMany(Assess_Question);
    };

    return Assess_Question;
};