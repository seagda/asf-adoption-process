module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        name: {type: DataTypes.STRING, allowNull: false}

    })
};


return Region;