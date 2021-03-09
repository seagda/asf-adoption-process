module.exports = (sequelize, DataTypes) => {
    const HouseholdMember = sequelize.define("HouseholdMember", {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        dob: { type: DataTypes.DATEONLY, allowNull: false },
        relationship: { type: DataTypes.STRING, allowNull: false }
    });

    HouseholdMember.associate = db => {
        db.User.hasMany(HouseholdMember);
        HouseholdMember.belongsTo(db.User);
    };
    return HouseholdMember;
};