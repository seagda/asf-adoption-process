module.exports = (sequelize, DataTypes) => {
    const Familymember = sequelize.define("Familymember", {
        first_name:{type:DataTypes.STRING, allowNull: false},
        last_name:{type:DataTypes.STRING, allowNull: false},
        dob: {type:DataTypes.DATEONLY, allowNull: false}
    });

    Familymember.associate = db => {
        db.User.hasMany(Familymember);
        Familymember.belongsTo(db.User);
    };
    return Familymember;
};