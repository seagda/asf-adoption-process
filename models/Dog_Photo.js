module.exports = (sequelize, DataTypes) => {
    const Dog_Photo = sequelize.define("Dog_Photo", {
        url: {type:DataTypes.STRING, allowNull: false, validate: { isUrl: true }}
    });

    Dog_Photo.associate = db => {
        db.Dog.hasMany(Dog_Photo);
        Dog_Photo.belongsTo(db.Dog);
    };
    return Dog_Photo;
};


 