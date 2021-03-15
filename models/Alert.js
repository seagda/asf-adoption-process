module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define("Alert", {
        message: { type: DataTypes.STRING, allowNull: false },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    Alert.associate = db => {
        db.User.hasMany(Alert, { foreignKey: { name: "ToUserId", allowNull: false } });
        Alert.belongsTo(db.User, { as: "ToUser", foreignKey: { name: "ToUserId", allowNull: false } });

        Alert.belongsTo(db.Dog, { as: "AboutDog" });
        Alert.belongsTo(db.User, { as: "AboutUser" });
    };

    return Alert;
};