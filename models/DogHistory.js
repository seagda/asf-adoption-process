module.exports = (sequelize, DataTypes) => {
    const DogHistory = sequelize.define("DogHistory", {
        dateFrom: DataTypes.DATEONLY,
        dateTo: DataTypes.DATEONLY
    }, { underscored: true });

    DogHistory.associate = db => {
        db.Dog.hasMany(DogHistory);
        DogHistory.belongsTo(db.Dog);
        db.User.hasMany(DogHistory);
        DogHistory.belongsTo(db.User);
    };

    return DogHistory;
};


