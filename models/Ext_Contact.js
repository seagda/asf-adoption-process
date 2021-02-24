module.exports = (sequelize, DataTypes) => {
    const Ext_Contact = sequelize.define("Ext_Contact", {
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
        },
        phone: {type:DataTypes.STRING,allowNull:false},
        full_name: {type:DataTypes.STRING, allowNull:false},
        contact_type: {type:DataTypes.ENUM("shelter","rescue","vet","trainer","surrender","other")}
    });

    Ext_Contact.associate = db => {
        Ext_Contact.hasOne(db.Address);
        Ext_Contact.hasOne(db.Region);
    };

    return Ext_Contact;
};