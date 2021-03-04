module.exports = (sequelize, DataTypes) => {
    const DogPhoto = sequelize.define("DogPhoto", {
        url: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
        profilePhoto: {type:DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
    }, { paranoid: false });

    return DogPhoto;
};


