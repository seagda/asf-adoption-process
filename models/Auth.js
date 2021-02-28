module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Auth", {
        createKey: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        fbId: DataTypes.STRING,
        gId: DataTypes.STRING
    }, {
        validate: {
            mustHaveOneKind() {
                if ((this.createKey || this.password || this.fbId || this.gId) === null) throw new Error("Must have at least one kind of auth");
            },
            createKeyOrOther() {
                if (this.createKey && (this.password || this.fbId || this.gId)) throw new Error("Must remove createKey to add other auth");
            }
        }, underscored: true
    });
};