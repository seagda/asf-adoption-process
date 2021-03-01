module.exports = (sequelize, DataTypes, Model) => {
    class Dog extends Model {
        getAddress() {
            if (this.currentlyWithId) return this.getCurrentlyWith({ include: "Address" }).then(currentlyWith => currentlyWith.Address);
            return this.getOrigin({ include: "Address" }).then(origin => origin.Address);
        }

        getRegion() {
            if (this.currentlyWithId) return this.getCurrentlyWith({ include: "Region" }).then(currentlyWith => currentlyWith.Address);
            return this.getOrigin({ include: "Region" }).then(origin => origin.Region);
        }

        static associate(db) {
            Dog.hasOne(db.DogPhoto, { foreignKey: { name: "profilePhoto", allowNull: true } });

            db.ExtContact.hasMany(Dog, { as: "origin", foreignKey: { name: "originId", allowNull: false } });
            Dog.belongsTo(db.ExtContact, { as: "origin", foreignKey: { name: "originId", allowNull: false } });

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
            unique: true
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
    }, { sequelize });

    return Dog;
}