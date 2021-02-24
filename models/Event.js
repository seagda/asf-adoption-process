module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        time: {type:DataTypes.Date, allowNull: false},
        desc: {type:DataTypes.STRING, allowNull: false}
    });

    Event.associate = db => {
        Event.hasOne(db.Address, {foreignKey: {allowNull: true}}
        );

        Event.belongsToMany(db.Ext_Contact, { through: "EventsContacts" });
        db.Ext_Contact.belongsToMany(Event, { through: "EventsContacts" });

        Event.belongsToMany(db.User, { through: "EventsUsers" });
        db.User.belongsToMany(Event, { through: "EventsUsers" });
    };  
    return Event;
};


