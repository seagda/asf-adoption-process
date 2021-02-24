module.exports = (sequelize, DataTypes) => {
    const MicrochipMFG = sequelize.define("MicrochipMFG", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });
    return MicrochipMFG;
};


