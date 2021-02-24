module.exports = (sequelize, DataTypes) => {
    const Dog_History = sequelize.define("Dog_History", {
        date_from: DataTypes.Date,
        date_to: DataTypes.Date
    });
 
    Dog_History.associate = db => {
        db.Dog.hasMany(Dog_History);
        Dog_History.belongsTo(db.Dog);
        db.User.hasMany(Dog_History);
        Dog_History.belongsTo(db.User);
    };    

    return Dog_History;
};


