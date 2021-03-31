module.exports = (sequelize, DataTypes) => {
    const DogHistory = sequelize.define("DogHistory", {
        dateFrom: { type: DataTypes.DATEONLY, allowNull: false },
        dateTo: { type: DataTypes.DATEONLY, allowNull: false }
    });

    DogHistory.associate = db => {
        db.Dog.hasMany(DogHistory, { foreignKey: { allowNull: false } });
        DogHistory.belongsTo(db.Dog, { foreignKey: { allowNull: false } });
        db.User.hasMany(DogHistory, { foreignKey: { allowNull: false } });
        DogHistory.belongsTo(db.User, { foreignKey: { allowNull: false } });
    };

    return DogHistory;
};


