module.exports = (sequelize, DataTypes) => {
    const DogAlias = sequelize.define("DogAlias", {
        name: { type: DataTypes.STRING, allowNull: false }
    });

    DogAlias.associate = db => {
        db.Dog.hasMany(DogAlias);
        DogAlias.belongsTo(db.Dog);
    };

    return DogAlias;
};

