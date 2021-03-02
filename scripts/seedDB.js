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

// Seed the AppType table
const appTypeSeed = [
    { name: "adopter" },
    { name: "foster" },
    { name: "transporter" },
    { name: "volunteer" }
];


// Seed the ADDRESS TABLE
const AddressSeed = [
    { street: "123 Test Street", street2: "#341", state: "Texas", city: "Dallas", zip5: "57063" },
    { street: "234 Sample Ave", street2: "", state: "Texas", city: "Dallas", zip5: "57001" },
    { street: "123 Test Street", street2: "", state: "Texas", city: "Houston", zip5: "77001" },
    { street: "234 Sample Ave", street2: "", state: "Texas", city: "Houston", zip5: "77024" },
    { street: "123 Test Street", street2: "", state: "Oklahoma", city: "Oklahoma City", zip5: "73008" },
    { street: "234 Sample Ave", street2: "", state: "Oklahoma", city: "Oklahoma City", zip5: "73104" },
    { street: "123 Test Street", street2: "", state: "Missouri", city: "St. Louis", zip5: "63101" },
    { street: "234 Sample Ave", street2: "801", state: "Missouri", city: "St. Louis", zip5: "63136" },
    { street: "123 Test Street", street2: "", state: "Massachusetts", city: "Boston", zip5: "02215" },
    { street: "234 Sample Ave", street2: "", state: "Massachusetts", city: "Somerville", zip5: "02138" },
    { street: "123 Test Street", street2: "801", state: "Arkansas", city: "Little Rock", zip5: "72002" },
    { street: "234 Sample Ave", street2: "", state: "Arkansas", city: "Little Rock", zip5: "72255" },
    { street: "123 Test Street", street2: "", state: "Alabama", city: "Mobile", zip5: "36525" },
    { street: "234 Sample Ave", street2: "", state: "Alabama", city: "Mobile", zip5: "36641" },
    { street: "123 Test Street", street2: "", state: "Mississippi", city: "Jackson", zip5: "39056" },
    { street: "234 Sample Ave", street2: "801", state: "Mississippi", city: "Jackson", zip5: "39215" },
    { street: "123 Test Street", street2: "", state: "Louisiana", city: "Baton Rouge", zip5: "70831" },
    { street: "234 Sample Ave", street2: "", state: "Louisiana", city: "Baton Rouge", zip5: "70801" },
  ];
  
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
  // Seed the Ext Contacts table
  const ExtContactSeed = [
    {email: "testshelter@test.com", phone: "555-555-5555", fullName: "Sample Shelter", contactType:"shelter", AddressId: 1, RegionId: 13 },
    {email: "testshelter@test.com", phone: "555-555-5555", fullName: "Another Shelter", contactType:"shelter", AddressId: 2, RegionId: 13 },
    {email: "testrescue@test.com", phone: "555-555-5555", fullName: "Sample Rescue", contactType:"Rescue", AddressId: 3, RegionId: 14 },
    {email: "testrescue@test.com", phone: "555-555-5555", fullName: "Another Rescue", contactType:"rescue", AddressId:4, RegionId: 14 },
    {email: "vet1@test.com", phone: "555-555-5555", fullName: "Sample Vet", contactType:"vet", AddressId: 5, RegionId: 1 },
    {email: "vet2@test.com", phone: "555-555-5555", fullName: "Another Vet", contactType:"vet", AddressId: 6, RegionId:	1 },
    {email: "trainer1@test.com", phone: "555-555-5555", fullName: "Sample Trainer", contactType:"trainer", AddressId: 7, RegionId: 1 },
    {email: "trainer2@test.com", phone: "555-555-5555", fullName: "Another Trainer", contactType:"trainer", AddressId: 8, RegionId: 1 },
    {email: "exdogdaddy@test.com", phone: "555-555-5555", fullName: "Tom Tutone", contactType:"surrender", AddressId: 9, RegionId: 9 },
    {email: "dogsnomore@test.com", phone: "555-555-5555", fullName: "Lita Zed", contactType:"surrender",	AddressId: 10, RegionId: 9 },
    {email: "other@test.com", phone: "555-555-5555", fullName: "Sample Other", contactType:"other", AddressId: 11, RegionId: 1 },
    {email: "other1@test.com", phone: "555-555-5555", fullName: "Another Record", contactType:"other",  AddressId: 12, RegionId: 1 }
  ];
  
// Seed the App Status table
const appStatusSeed = [
    { name: "Application Received"}, 
    { name: "Background Check Complete"}, 
    { name: "Reference Check Complete"}, 
    { name: "Approved" }, 
    { name: "Auto Rejected" },
    { name: "Declined" }
 ];
 
 // Seed the Dog Status table
 const dogStatusSeed = [
    { name: "Pending Intake" }, 
    { name: "Foster Ready" }, 
    { name: "In Foster" }, 
    { name: "Almost Adoption Ready" }, 
    { name: "Adoption Ready" }, 
    { name: "Adopted" }
 ];

// Seed the Microchip MFG table
const MicrochipMfgSeed = [
    { name: "24PetWatch Pet Protection Services" },
    { name: "911PetChip & Free Pet Chip Registry" },
    { name: "ACA MARRS" },
    { name: "AKC Reunite" },
    { name: "aZoo.me Identification" },
    { name: "BC Pet Registry" },
    { name: "BeKind PetFind" },
    { name: "BuddyID" },
    { name: "EIDAP" },
    { name: "Emili" },
    { name: "Fi" },
    { name: "Found Animals" },
    { name: "Furreka" },
    { name: "HomeAgain" },
    { name: "Homeward Bound Pet" },
    { name: "Identrac Inc." },
    { name: "International Pet Registry" },
    { name: "Microchip I.D. Solutions" },
    { name: "MyPetsChip" },
    { name: "Nanochip ID Inc." },
    { name: "National Animal Identification Center" },
    { name: "Peeva" },
    { name: "PetKey" },
    { name: "PetLink" },
    { name: "Petstablished" },
    { name: "Prime Trackr" },
    { name: "Save This Life" },
    { name: "SmartTag Microchip" },
    { name: "uPet" }
];
Promise.all([
    db.Region.bulkCreate(regionSeed),
    db.Address.bulkCreate(AddressSeed), 
    db.MicrochipMfg.bulkCreate(MicrochipMfgSeed), 
    db.AppStatus.bulkCreate(appStatusSeed),
    db.DogStatus.bulkCreate(dogStatusSeed),
    db.AppType.bulkCreate(appTypeSeed)
]).then(() => db.ExtContact.bulkCreate(ExtContactSeed)).catch(console.error);


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