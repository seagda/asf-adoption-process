module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        time: {type:DataTypes.Date, allowNull: false},
        desc: {type:DataTypes.STRING, allowNull: false}
    });

    Event.associate = db => {
        Event.hasOne(db.Address, {foreignKey: {allowNull: true}}
        );
    };  
    return Event;
};


