module.exports = (sequelize, DataTypes) => {
    const DogPhoto = sequelize.define("DogPhoto", {
        url: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } }
    }, { paranoid: false });

    DogPhoto.associate = db => {
        db.Dog.hasMany(DogPhoto);
        DogPhoto.belongsTo(db.Dog);
    };
    return DogPhoto;
};


