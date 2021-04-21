module.exports = (sequelize, DataTypes) => {
    const MediStatus = sequelize.define("MediStatus", {
        heartworm: { type: DataTypes.BOOLEAN, defaultValue: false },
        hwRecent: DataTypes.DATEONLY,
        hwExp: DataTypes.DATEONLY,
        hwCost: DataTypes.INTEGER,
        hwPrevent: { type: DataTypes.BOOLEAN, defaultValue: false },
        hwPrevRecent: DataTypes.DATEONLY,
        hwPrevExp: DataTypes.DATEONLY,
        hwPrevCost: DataTypes.INTEGER,
        distemper: { type: DataTypes.BOOLEAN, defaultValue: false },
        distRecent: DataTypes.DATEONLY,
        distExp: DataTypes.DATEONLY,
        distCost: DataTypes.INTEGER,
        kennelCough: { type: DataTypes.BOOLEAN, defaultValue: false },
        kcRecent: DataTypes.DATEONLY,
        kcExp: DataTypes.DATEONLY,
        kcCost: DataTypes.INTEGER,
        fourDX: { type: DataTypes.BOOLEAN, defaultValue: false },
        fourDXRecent: DataTypes.DATEONLY,
        fourDXExp: DataTypes.DATEONLY,
        fourDXCost: DataTypes.INTEGER,
        fleaTick: { type: DataTypes.BOOLEAN, defaultValue: false },
        fleaTickRecent: DataTypes.DATEONLY,
        fleaTickRecent: DataTypes.DATEONLY,
        fleaTickCost: DataTypes.INTEGER,
        altered: { type: DataTypes.BOOLEAN, defaultValue: false },
        alteredDate: DataTypes.DATEONLY,
        alteredCost: DataTypes.INTEGER
    });

    MediStatus.associate = db => {
        MediStatus.belongsTo(db.Dog, { foreignKey: { allowNull: false, unique: true } });
        db.Dog.hasOne(MediStatus);
        db.Document.belongsTo(MediStatus, { foreignKey: { allowNull: true } })
        MediStatus.hasMany(db.Document);
    };

    return MediStatus;
};