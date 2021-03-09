module.exports = (sequelize, DataTypes) => {
    const Reference = sequelize.define("Reference", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contacted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dateContacted: DataTypes.DATEONLY,
        notes: DataTypes.STRING
    });

    Reference.associate = db => {
        Reference.belongsTo(db.User);
        db.User.hasMany(Reference);
    };

    return Reference;
};


