module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        street: { type: DataTypes.STRING, allowNull: false },
        street2: DataTypes.STRING,
        state: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        zip5: { type: DataTypes.STRING, allowNull: false }
    })
};

return Address;