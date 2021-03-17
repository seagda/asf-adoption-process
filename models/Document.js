module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define("Document", {
        name: { type: DataTypes.STRING, allowNull: false }
    });

    Document.associate = db => {
        db.Dog.hasMany(Document, { foreignKey: { allowNull: false } });
        Document.belongsTo(db.Dog);
    };
    return Document;
};