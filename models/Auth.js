module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Auth", {
        fb_id: DataTypes.STRING,
        g_id: DataTypes.STRING
    });
};