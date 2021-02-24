module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define("Alert", {
        message: {type:DataTypes.STRING, allowNull: false},
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    Alert.associate = db => {
        Alert.belongsTo(db.User);
        db.User.hasMany(Alert, { foreignKey: { name: "to_user_id", allowNull: false } });
        Alert.hasOne(db.Dog, { foreignKey: { name: "about_dog_id", allowNull: true } });
        Alert.hasOne(db.User, { foreignKey: { name: "about_user_id", allowNull: true } });
    };  
    
    return Alert;
};