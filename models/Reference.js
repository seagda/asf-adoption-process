module.exports = (sequelize, DataTypes) => {
    const Reference = sequelize.define("Reference", {
        full_name: DataTypes.STRING,
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
        date_contacted: DataTypes.DATEONLY,
        notes: DataTypes.STRING
    });
    
    Reference.associate = db => {
        Reference.belongsTo(db.User);
        db.User.hasMany(Reference);

    };

    return Reference;
};


