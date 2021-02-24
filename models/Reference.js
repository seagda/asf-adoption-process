module.exports = (sequelize, DataTypes) => {
    const Reference = sequelize.define("Reference", {
        fullName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            allowNull: false
        },
        phone: DataTypes.STRING,
        contacted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dateContacted: DataTypes.DATEONLY,
        notes: DataTypes.STRING
    }, { underscored: true });

    Reference.associate = db => {
        Reference.belongsTo(db.User);
        db.User.hasMany(Reference);

    };

    return Reference;
};


