module.exports = (sequelize, DataTypes) => {
    const ExtContact = sequelize.define("ExtContact", {
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
        },
        phone: { type: DataTypes.STRING, allowNull: false },
        fullName: { type: DataTypes.STRING, allowNull: false },
        contactType: { type: DataTypes.ENUM("shelter", "rescue", "vet", "trainer", "surrender", "other") }
    }, { underscored: true, paranoid: true });

    ExtContact.associate = db => {
        ExtContact.belongsTo(db.Address);
        ExtContact.belongsTo(db.Region);
    };

    return ExtContact;
};