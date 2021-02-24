module.exports = (sequelize, DataTypes) => {
    const Microchip_MFG = sequelize.define("Microchip_MFG", {
        name: {type: DataTypes.STRING, allowNull: false}   

    })
    return Microchip_MFG;
}; 


