const db = require("../models");

// Seed the ROLES table
const roleSeed = [
    { name: "user" },
    { name: "rescuer" },
    { name: "adopter" },
    { name: "foster" },
    { name: "placement" },
    { name: "regional" },
    { name: "superAdmin" },
    { name: "transporter" },
    { name: "volunteer" }
];

// Seed the USERS table
const userSeed = [
    {
        firstName: "Test",
        lastName: "User",
        email: "testuser@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "Rescuer",
        email: "testrescuer@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "Adopter",
        email: "testadopter@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "Foster",
        email: "testfoster@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "Placement",
        email: "testplacement@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "Regional",
        email: "testregional@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    },
    {
        firstName: "Test",
        lastName: "SuperAdmin",
        email: "testsuperadmin@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    }

];

// Clear the roles table, then use bulkCreate to insert above
db.Role.destroy({ where: {} }).then(() =>
    db.Role.bulkCreate(roleSeed)
        .then((data) => {
            console.log(data.length + " records inserted!");
            // Clear the USERS table, then use bulkCreate to insert above
            db.User.destroy({ where: {} }).then(() =>
                db.User.bulkCreate(userSeed, { include: [db.Auth, db.Role] })
                    .then((usersData) => {
                        usersData[0].addRoles([1]);
                        usersData[1].addRoles([1, 2]);
                        usersData[2].addRoles([1, 3]);
                        usersData[3].addRoles([1, 4]);
                        usersData[4].addRoles([1, 5]);
                        usersData[5].addRoles([1, 6]);
                        usersData[6].addRoles([1, 7]);
                        console.log(usersData.length + " records inserted!");
                    })
                    .catch((err) => {
                        console.error(err);
                        process.exit(1);
                    })
            );
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
);

const appStatusSeeds = [{
    name: "Application Recieved"
}, {
    name: "Background Check Complete"
}, {
    name: "Reference Check Complete"
}, {
    name: "Approved"
}, {
    name: "Auto Rejected"
}];

const dogStatusSeeds = [{
    name: "Pending Intake"
}, {
    name: "Foster Ready"
}, {
    name: "In Foster"
}, {
    name: "Adoption Ready"
}, {
    name: "Adopted"
}];

db.AppStatus.bulkCreate(appStatusSeeds).then(console.log).catch(console.error);
db.DogStatus.bulkCreate(dogStatusSeeds).then(console.log).catch(console.error);