module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model {
        getAvailableCapacity() {
            return sequelize.models.Dog.count({ where: { currentlyWithId: this.id } }).then(count => this.maxCapacity - count);
        }

        static associate(db) {
            User.belongsTo(db.Address);

            User.belongsTo(db.Auth, { foreignKey: { allowNull: false } });
            db.Auth.hasOne(User, { foreignKey: { allowNull: false } });

            User.belongsToMany(db.Role, { through: "UsersRoles" });
            db.Role.belongsToMany(User, { through: "UsersRoles" });

            User.belongsToMany(db.Region, { through: "UsersRegions" });
            db.Region.belongsToMany(User, { through: "UsersRegions" });

            User.hasMany(db.Alert, { foreignKey: { name: "toUserId", allowNull: false } });
        }
    }

    User.init({
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            allowNull: false,
            unique: true
        },
        phone: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        photoUrl: {
            type: DataTypes.STRING,
            validate: { isUrl: true }
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        adminNotes: DataTypes.STRING,
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        maxCapacity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        puppies: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        adults: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        seniors: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        withBehaviorIssues: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        withMedicalIssues: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { sequelize });

    return User;
};

