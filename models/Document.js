module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define("Document", {
        url: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
        desc: { type: DataTypes.STRING, allowNull: false }
    });

    Document.associate = db => {
        db.Dog.hasMany(Document);
        Document.belongsTo(db.Dog);
    };
    return Document;
};


