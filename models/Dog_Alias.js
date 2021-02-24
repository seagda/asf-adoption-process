module.exports = (sequelize, DataTypes) => {
    const Dog_Alias = sequelize.define("Dog_Alias", {
        name: {type: DataTypes.STRING, allowNull: false}
    })
};

Dog_Alias.associate = db => {
    db.Dog.hasMany(Dog_Alias);
    Dog_Alias.belongsTo(db.Dog);

};

return Dog_Alias;