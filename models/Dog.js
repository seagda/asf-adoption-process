module.exports = (sequelize, DataTypes) => {
    const Dog = sequelize.define("Dog", {
        asfId: {
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
        microchipId: DataTypes.INTEGER,
        isPurebred: DataTypes.BOOLEAN,
        secondaryBreed: DataTypes.STRING,
        pullCost: DataTypes.INTEGER,
        behaviorIssues: DataTypes.STRING,
        medicalIssues: DataTypes.STRING,
        size: DataTypes.ENUM("mini", "small", "medium", "large"),
        weight: DataTypes.DECIMAL,
        coat: DataTypes.STRING,
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { underscored: true, paranoid: true });

    Dog.associate = db => {
        Dog.hasOne(db.DogPhoto, { foreignKey: { name: "profilePhoto", allowNull: true } });

        db.ExtContact.hasMany(Dog, { foreignKey: { name: "originId", allowNull: true } });
        Dog.belongsTo(db.ExtContact, { foreignKey: { name: "originId", allowNull: true } });

        db.User.hasMany(Dog, { foreignKey: "currentlyWithId" });
        Dog.belongsTo(db.User, { foreignKey: "currentlyWithId" });

        db.MicrochipMfg.hasMany(Dog);
        Dog.belongsTo(db.MicrochipMfg);

        db.DogStatus.hasMany(Dog);
        Dog.belongsTo(db.DogStatus);
    };

    return Dog;
}