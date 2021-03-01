module.exports = (sequelize, DataTypes) => {
    const BehavioralAssessment = sequelize.define("BehavioralAssessment", {
        response: {
            type: DataTypes.JSON,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });

    BehavioralAssessment.associate = db => {
        db.Dog.hasMany(BehavioralAssessment, { foreignKey: { allowNull: false } });
        BehavioralAssessment.belongsTo(db.Dog);

        db.User.hasMany(BehavioralAssessment, { foreignKey: { allowNull: false } });
        BehavioralAssessment.belongsTo(db.User);
    };

    return BehavioralAssessment;
};