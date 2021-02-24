module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Auth", {
        fbId: DataTypes.STRING,
        gId: DataTypes.STRING
    }, { underscored: true });
};