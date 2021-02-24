module.exports = (sequelize, DataTypes) => {
    const App_Question_Category = sequelize.define("App_Question_Category", {
        name: {type: DataTypes.STRING, allowNull: false}   
    })
    return App_Question_Category;
};


