module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        street: { type: DataTypes.STRING, allowNull: false },
        street2: DataTypes.STRING,
        state: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        zip5: { type: DataTypes.STRING, allowNull: false },
        lat: {type: DataTypes.DECIMAL(8,6), allowNull: false },
        lon: {type: DataTypes.DECIMAL(9,6), allowNull: false}
    });
    return Address;
};

