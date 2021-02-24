module.exports = (sequelize, DataTypes) => {
    const App_Status = sequelize.define("App_Status", {
        name: {type: DataTypes.STRING, allowNull: false}      

    })
};


return App_Status;