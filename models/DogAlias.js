module.exports = (sequelize, DataTypes) => {
    const DogAlias = sequelize.define("DogAlias", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });

    DogAlias.associate = db => {
        db.Dog.hasMany(DogAlias);
        DogAlias.belongsTo(db.Dog);
    };

    return DogAlias;
};

