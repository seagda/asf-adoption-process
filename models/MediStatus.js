module.exports = (sequelize, DataTypes) => {
    const MediStatus = sequelize.define("MediStatus", {
        heartworm: { type: DataTypes.BOOLEAN, defaultValue: false },
        hwPrevent: { type: DataTypes.BOOLEAN, defaultValue: false },
        distemper: { type: DataTypes.BOOLEAN, defaultValue: false },
        kennelCough: { type: DataTypes.BOOLEAN, defaultValue: false },
        fourDX: { type: DataTypes.BOOLEAN, defaultValue: false },
        fleaTick: { type: DataTypes.BOOLEAN, defaultValue: false },
        altered: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { underscored: true });

    MediStatus.associate = db => {
        MediStatus.belongsTo(db.Dog, { foreignKey: { allowNull: false } });
        db.Dog.hasOne(MediStatus);
        db.Document.belongsTo(MediStatus, { foreignKey: { allowNull: true } })
        MediStatus.hasMany(db.Document);
    };

    return MediStatus;
};