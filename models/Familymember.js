module.exports = (sequelize, DataTypes) => {
    const Familymember = sequelize.define("Familymember", {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        dob: { type: DataTypes.DATEONLY, allowNull: false }
    }, { underscored: true, paranoid: true });

    Familymember.associate = db => {
        db.User.hasMany(Familymember);
        Familymember.belongsTo(db.User);
    };
    return Familymember;
};