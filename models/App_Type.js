module.exports = (sequelize, DataTypes) => {
    const App_Type = sequelize.define("App_Type", {
        name: {type: DataTypes.STRING, allowNull: false} 

    })
    return App_Type;
};


