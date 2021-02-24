module.exports = (sequelize, DataTypes) => {
    const Behavioral_Assessment = sequelize.define("Behavioral_Assessment", {
        response: {
            type: DataTypes.JSON,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });

    Behavioral_Assessment.associate = db => {
        db.Dog.hasMany(Behavioral_Assessment, { foreignKey: { allowNull: false } });
        Behavioral_Assessment.belongsTo(db.Dog);

        db.User.hasMany(Behavioral_Assessment, { foreignKey: { allowNull: false } });
        Behavioral_Assessment.belongsTo(db.User);
    };

    return Behavioral_Assessment;
};