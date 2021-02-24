module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define("Alert", {
        message: { type: DataTypes.STRING, allowNull: false },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    Alert.associate = db => {
        db.Dog.hasOne(Alert, { foreignKey: { name: "about_dog_id", allowNull: true } });
        db.User.hasOne(Alert, { foreignKey: { name: "about_user_id", allowNull: true } });
    };

    return Alert;
};