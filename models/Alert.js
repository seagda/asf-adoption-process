module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define("Alert", {
        message: { type: DataTypes.STRING, allowNull: false },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, { underscored: true, paranoid: true });

    Alert.associate = db => {
        db.Dog.hasOne(Alert, { foreignKey: { name: "aboutDogId", allowNull: true } });
        db.User.hasOne(Alert, { foreignKey: { name: "aboutUserId", allowNull: true } });
    };

    return Alert;
};