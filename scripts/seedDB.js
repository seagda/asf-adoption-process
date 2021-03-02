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
    { name: "admin" },
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
    },
    {
        firstName: "Test",
        lastName: "Admin",
        email: "testadmin@asf.com",
        Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }
    }

];

// Clear the roles table, then use bulkCreate to insert above
db.Role.bulkCreate(roleSeed)
       .then((data) => {
        console.log(data.length + " records inserted!");
    // Clear the USERS table, then use bulkCreate to insert above
    return db.User.bulkCreate(userSeed, { include: [db.Auth, db.Role] })
}).then((usersData) => {
    usersData[0].addRoles([1]);
    usersData[1].addRoles([1, 2]);
    usersData[2].addRoles([1, 3]);
    usersData[3].addRoles([1, 4]);
    usersData[4].addRoles([1, 5]);
    usersData[5].addRoles([1, 6]);
    usersData[6].addRoles([1, 7]);
    usersData[7].addRoles([1, 8]);
    console.log(usersData.length + " records inserted!");
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

// Seed the REGIONS table
const regionSeed = [
    { name: "Midwest/South" },
    { name: "Mid-Atlantic" },
    { name: "Mississippi Valley" },
    { name: "Great Lakes" },
    { name: "Plains States" },
    { name: "Rocky Mountain" },
    { name: "Southeast" },
    { name: "Northern New England" },
    { name: "Southern New England" },
    { name: "Northeast" },
    { name: "West Coast" },
    { name: "Pacific Northwest" },
    { name: "West Texas" },
    { name: "South Texas" },
    { name: "North Texas" },
    { name: "East Texas" }
];

const appStatusSeed = [
   { name: "Application Received"}, 
   { name: "Background Check Complete"}, 
   { name: "Reference Check Complete"}, 
   { name: "Approved" }, 
   { name: "Auto Rejected" },
   { name: "Declined" }
];

const dogStatusSeed = [
   { name: "Pending Intake" }, 
   { name: "Foster Ready" }, 
   { name: "In Foster" }, 
   { name: "Almost Adoption Ready" }, 
   { name: "Adoption Ready" }, 
   { name: "Adopted" }
];

db.AppStatus.bulkCreate(appStatusSeed).then(console.log).catch(console.error);
db.DogStatus.bulkCreate(dogStatusSeed).then(console.log).catch(console.error);
db.Region.bulkCreate(regionSeed).then(console.log).catch(console.error);