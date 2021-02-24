module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        create_key: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            allowNull: false,
            unique: true
        },
        phone: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        photo_url: {
            type: DataTypes.STRING,
            validate: { isUrl: true }
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        admin_notes: DataTypes.STRING,
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        max_capacity: {
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
        with_behavior_issues: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        with_medical_issues: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    User.associate = db => {
        User.hasOne(db.Address);
        db.Auth.belongsTo(User);

        User.belongsToMany(db.Role, { through: "UsersRoles" });
        db.Role.belongsToMany(User, { through: "UsersRoles" });

        User.belongsToMany(db.Region, { through: "UsersRegions" });
        db.Region.belongsToMany(User, { through: "UsersRegions" });
    };

    return User;
};

