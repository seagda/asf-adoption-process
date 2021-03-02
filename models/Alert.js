module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define("Alert", {
        message: { type: DataTypes.STRING, allowNull: false },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    Alert.associate = db => {
        Alert.belongsTo(db.Dog, { foreignKey: { name: "aboutDogId", allowNull: true } });
        Alert.belongsTo(db.User, { foreignKey: { name: "aboutUserId", allowNull: true } });
    };

    return Alert;
};