module.exports = (sequelize, DataTypes) => {
    const Assess_Question_Category = sequelize.define("Assess_Question_Category", {
        name: {type: DataTypes.STRING, allowNull: false}   
    })
    return Assess_Question_Category;
};