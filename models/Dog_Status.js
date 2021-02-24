module.exports = (sequelize, DataTypes) => {
    const Dog_Status = sequelize.define("Dog_Status", {
        name: {type: DataTypes.STRING, allowNull: false}   

    })
    return Dog_Status;
};


