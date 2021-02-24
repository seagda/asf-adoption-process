module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        name: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });
    return Region;
};


