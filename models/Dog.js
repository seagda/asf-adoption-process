module.exports = (sequelize, DataTypes, Model) => {
    class Dog extends Model {
        static associate(db) {
            Dog.hasOne(db.DogPhoto, { foreignKey: { name: "profilePhoto", allowNull: true } });

            db.ExtContact.hasMany(Dog, { as: "origin", foreignKey: { name: "originId", allowNull: true } });
            Dog.belongsTo(db.ExtContact, { as: "origin", foreignKey: { name: "originId", allowNull: true } });

            db.User.hasMany(Dog, { as: "currentlyWith", foreignKey: "currentlyWithId" });
            Dog.belongsTo(db.User, { as: "currentlyWith", foreignKey: "currentlyWithId" });

            db.MicrochipMfg.hasMany(Dog);
            Dog.belongsTo(db.MicrochipMfg);

            db.DogStatus.hasMany(Dog);
            Dog.belongsTo(db.DogStatus);
        }
    }

    Dog.init({
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
    }, { sequelize, underscored: true, paranoid: true });

    return Dog;
}