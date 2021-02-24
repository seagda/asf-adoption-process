module.exports = (sequelize, DataTypes) => {
    const App_Question = sequelize.define("App_Question", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        response_format: {
            type: DataTypes.ENUM("boolean", "text", "number", "url", "selection"),
            allowNull: false
        },
        required: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // depends_on_answer is the answer value for the depends_on question that triggers asking this question
        depends_on_answer: DataTypes.INTEGER
    });

    App_Question.associate = db => {
        db.App_Question_Category.hasMany(App_Question);
        App_Question.belongsTo(db.App_Question_Category);

        App_Question.hasOne(App_Question, { foreignKey: "depends_on_question" });
    };

    return App_Question;
};