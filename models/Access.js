module.exports = (sequelize, DataTypes) => {
    const Access = sequelize.define("Access", {
        resource: {
            type: DataTypes.STRING,
            allowNull: false
        },
        action: {
            type: DataTypes.ENUM("create:own", "read:own", "update:own", "delete:own", "create:any", "read:any", "update:any", "delete:any"),
            allowNull: false
        },
        attributes: DataTypes.JSON
    }, { paranoid: false });
    return Access;
};