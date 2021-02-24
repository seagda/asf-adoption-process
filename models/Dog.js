module.exports = (sequelize, DataTypes) => {
    const Dog = sequelize.define("Dog", {
        asf_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: DataTypes.ENUM("male", "female"),
        dob: DataTypes.DATEONLY,
        microchip_id: DataTypes.INTEGER,
        is_purebred: DataTypes.BOOLEAN,
        secondary_breed: DataTypes.STRING,
        pull_cost: DataTypes.INTEGER,
        behavior_issues: DataTypes.STRING,
        medical_issues: DataTypes.STRING,
        size: DataTypes.ENUM("mini", "small", "medium", "large"),
        weight: DataTypes.DECIMAL,
        coat: DataTypes.STRING,
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Dog.associate = db => {
        Dog.hasOne(db.Dog_Photo, { foreignKey: { name: "profile_photo", allowNull: true } });
        db.External_Contact.hasMany(Dog, { foreignKey: { name: "origin_id", allowNull: true } });
        Dog.belongsTo(db.External_Contact);
        db.User.hasMany(Dog, { foreignKey: "currently_with_id" });
        Dog.belongsTo(db.User);
        db.Microchip_MFG.hasMany(Dog, { foreignKey: { allowNull: true } });
        Dog.belongsTo(db.Microchip_MFG);
        db.Dog_Status.hasMany(Dog);
        Dog.belongsTo(db.Dog_Status);
    };

    return Dog;
}