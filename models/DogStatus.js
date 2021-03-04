module.exports = (sequelize, DataTypes) => {
    const DogStatus = sequelize.define("DogStatus", {
        name: { type: DataTypes.STRING, allowNull: false }

    });
    return DogStatus;
};


