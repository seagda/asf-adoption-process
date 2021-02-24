module.exports = (sequelize, DataTypes) => {
    const Medi_Status = sequelize.define("Medi_Status", {
        heartworm: {type: DataTypes.BOOLEAN, defaultValue: false},
        hw_prevent: {type: DataTypes.BOOLEAN, defaultValue: false},
        distemper: {type: DataTypes.BOOLEAN, defaultValue: false},
        kennel_cough: {type: DataTypes.BOOLEAN, defaultValue: false},
        fourDX: {type: DataTypes.BOOLEAN, defaultValue: false},
        flea_tick: {type: DataTypes.BOOLEAN, defaultValue: false},
        altered: {type: DataTypes.BOOLEAN, defaultValue: false}
    });

    Medi_Status.associate = db => {
        Medi_Status.belongsTo(db.Dog);
        db.Dog.hasOne(Medi_Status);
        Medi_Status.hasMany(db.Document);
        db.Document.hasOne(Medi_Status, {foreignKey: {allowNull: true}})
    };

    return Medi_Status;
};