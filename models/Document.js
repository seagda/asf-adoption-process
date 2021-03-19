module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define("Document", {
        name: { type: DataTypes.STRING, allowNull: false, unique: "name" }
    }, { paranoid: false });

    Document.associate = db => {
        db.Dog.hasMany(Document, { foreignKey: { allowNull: false, unique: "name" } });
        Document.belongsTo(db.Dog);
    };
    return Document;
};