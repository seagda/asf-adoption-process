module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        time: { type: DataTypes.DATE, allowNull: false },
        desc: { type: DataTypes.STRING, allowNull: false }
    }, { underscored: true });

    Event.associate = db => {
        Event.belongsTo(db.Address);

        Event.belongsToMany(db.ExtContact, { through: "EventsContacts" });
        db.ExtContact.belongsToMany(Event, { through: "EventsContacts" });

        Event.belongsToMany(db.User, { through: "EventsUsers" });
        db.User.belongsToMany(Event, { through: "EventsUsers" });
    };
    return Event;
};