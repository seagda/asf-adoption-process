module.exports = (sequelize, DataTypes) => {
    const DogStatus = sequelize.define("DogStatus", {
        name: { type: DataTypes.STRING, allowNull: false }

    }, { underscored: true });
    return DogStatus;
};


