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
    { street: "123 Test Street", street2: "", state: "Maine", city: "Bangor", zip5: "04462" },
    { street: "234 Sample Ave", street2: "", state: "Maine", city: "Bangor", zip5: "04462" },
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
  const extContactSeed = [
    {email: "testshelter@test.com", phone: "555-555-5555", fullName: "Sample Shelter", contactType:"shelter", AddressId: 1, RegionId: 14 },
    {email: "testshelter@test.com", phone: "555-555-5555", fullName: "Another Shelter", contactType:"shelter", AddressId: 2, RegionId: 14 },
    {email: "testrescue@test.com", phone: "555-555-5555", fullName: "Sample Rescue", contactType:"Rescue", AddressId: 3, RegionId: 14 },
    {email: "testrescue@test.com", phone: "555-555-5555", fullName: "Another Rescue", contactType:"rescue", AddressId:4, RegionId: 14 },
    {email: "vet1@test.com", phone: "555-555-5555", fullName: "Sample Vet", contactType:"vet", AddressId: 5, RegionId: 1 },
    {email: "vet2@test.com", phone: "555-555-5555", fullName: "Another Vet", contactType:"vet", AddressId: 6, RegionId:	1 },
    {email: "trainer1@test.com", phone: "555-555-5555", fullName: "Sample Trainer", contactType:"trainer", AddressId: 7, RegionId: 1 },
    {email: "trainer2@test.com", phone: "555-555-5555", fullName: "Another Trainer", contactType:"trainer", AddressId: 8, RegionId: 1 },
    {email: "exdogdaddy@test.com", phone: "555-555-5555", fullName: "Tom Tutone", contactType:"surrender", AddressId: 9, RegionId: 9 },
    {email: "dogsnomore@test.com", phone: "555-555-5555", fullName: "Lita Zed", contactType:"surrender", AddressId: 10, RegionId: 9 },
    {email: "other@test.com", phone: "555-555-5555", fullName: "Sample Other", contactType:"other", AddressId: 11, RegionId: 1 },
    {email: "other1@test.com", phone: "555-555-5555", fullName: "Another Record", contactType:"other", AddressId: 12, RegionId: 1 }
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
const microchipMfgSeed = [
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
    db.MicrochipMfg.bulkCreate(microchipMfgSeed), 
    db.AppStatus.bulkCreate(appStatusSeed),
    db.DogStatus.bulkCreate(dogStatusSeed),
    db.AppType.bulkCreate(appTypeSeed)
]).then(() => db.ExtContact.bulkCreate(extContactSeed)).catch(console.error);


// Seed the USERS table
//TODO: add RegionId, AddressId to test users
//TODO: add 10 sample users


const userSeed = [
    { firstName: "Texas", lastName: "User", email: "testuser@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 14 },
    { firstName: "North NE", lastName: "User", email: "testuserNNE@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 14, ResidesInRegionId: 8 },
    { firstName: "South NE", lastName: "User", email: "testuserSNE@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 9, ResidesInRegionId: 9 },
    { firstName: "Test", lastName: "Rescuer", email: "testrescuer@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14 },
    { firstName: "Test", lastName: "Adopter", email: "testadopter@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 14 },
    { firstName: "Test", lastName: "Foster", maxCapacity: 10, email: "testfoster@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14 },
    { firstName: "Texas", lastName: "Placement", email: "testplacement@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 14 },
    { firstName: "North NE", lastName: "Placement", email: "testplacementNNE@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 8 },
    { firstName: "South NE", lastName: "Placement", email: "testplacementSNE@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 9 },
    { firstName: "Texas", lastName: "Regional", email: "testregional1@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14 },
    { firstName: "North NE", lastName: "Regional", email: "testregional2@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 13, ResidesInRegionId: 8 },
    { firstName: "South NE", lastName: "Regional", email: "testregional3@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 9, ResidesInRegionId: 9 },
    { firstName: "Test", lastName: "SuperAdmin", email: "testsuperadmin@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 1, ResidesInRegionId: 14 },
    { firstName: "Test", lastName: "Admin", email: "testadmin@asf.com", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14 },
    { firstName: "Sample", lastName: "Foster 1", email: "samplefoster1@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 6, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", puppies: true, adults: true, seniors: true, withBehaviorIssues: true, withMedicalIssues: true },
    { firstName: "Sample", lastName: "Foster 2", email: "samplefoster2@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 12, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", puppies: true, adults: true },
    { firstName: "Sample", lastName: "Foster 3", email: "samplefoster3@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", adults: true, seniors: true, hold: true },
    { firstName: "Sample", lastName: "Foster 4", email: "samplefoster4@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 6, AddressId: 9, ResidesInRegionId: 9, dob: "1970-01-01", puppies: true, adults: true, seniors: true, withBehaviorIssues: true, withMedicalIssues: true },
    { firstName: "Sample", lastName: "Foster 5", email: "samplefoster5@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 12, AddressId: 13, ResidesInRegionId: 8, dob: "1970-01-01", puppies: true, adults: true },
    { firstName: "Sample", lastName: "Foster 6", email: "samplefoster6@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 14, ResidesInRegionId: 8, dob: "1970-01-01", adults: true, seniors: true, hold: true,withBehaviorIssues: true },
    { firstName: "Sample", lastName: "Rescuer 1", email: "samplerescuer1@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 6, AddressId: 9, ResidesInRegionId: 9, dob: "1970-01-01", puppies: true, adults: true, seniors: true, withBehaviorIssues: true, withMedicalIssues: true },
    { firstName: "Sample", lastName: "Rescuer 2", email: "samplerescuer2@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 13, ResidesInRegionId: 8, dob: "1970-01-01", puppies: true, adults: true },
    { firstName: "Sample", lastName: "Rescuer 3", email: "samplerescuer3@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 14, ResidesInRegionId: 8, dob: "1970-01-01", adults: true, seniors: true, hold: true },
    { firstName: "Sample", lastName: "Rescuer 4", email: "samplerescuer4@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", adults: true, seniors: true, hold: true },
    { firstName: "Sample", lastName: "Rescuer 5", email: "samplerescuer5@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 2, AddressId: 1, ResidesInRegionId: 14, dob: "1970-01-01", adults: true, seniors: true, hold: true },
    { firstName: "Sample", lastName: "Adopter 1", email: "sampleAdopter1@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", puppies: true, adults: true, seniors: true, withBehaviorIssues: true, withMedicalIssues: true },
    { firstName: "Sample", lastName: "Adopter 2", email: "sampleAdopter2@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 2, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", puppies: true, adults: true },
    { firstName: "Sample", lastName: "Adopter 3", email: "sampleAdopter3@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 2, ResidesInRegionId: 14, dob: "1970-01-01", adults: true, seniors: true, hold: true },
    { firstName: "Sample", lastName: "Adopter 4", email: "sampleAdopter4@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 9, ResidesInRegionId: 9, dob: "1970-01-01", puppies: true, adults: true, seniors: true, withBehaviorIssues: true, withMedicalIssues: true },
    { firstName: "Sample", lastName: "Adopter 5", email: "sampleAdopter5@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 2, AddressId: 13, ResidesInRegionId: 8, dob: "1970-01-01", puppies: true, adults: true },
    { firstName: "Sample", lastName: "Adopter 6", email: "sampleAdopter6@asf.com", phone: "555-555-5555", Auth: { password: "$2b$10$uAQmJIsVslJrbd8e7XS2V.LurYkNygMsmHDPD6Agi9wmN9Gw0HZIe" }, maxCapacity: 4, AddressId: 14, ResidesInRegionId: 8, dob: "1970-01-01", adults: true, seniors: true, hold: true,withBehaviorIssues: true }
];

// Clear the roles table, then use bulkCreate to insert above
db.Role.bulkCreate(roleSeed)
       .then((data) => {
        console.log(data.length + " records inserted!");
    // Clear the USERS table, then use bulkCreate to insert above
    return db.User.bulkCreate(userSeed, { include: [db.Auth, db.Role] })
}).then((usersData) => {
    usersData[0].addRoles([1]);
    usersData[1].addRoles([1]);
    usersData[2].addRoles([1]);
    usersData[3].addRoles([1, 2]);
    usersData[4].addRoles([1, 3]);
    usersData[5].addRoles([1, 4]);
    usersData[6].addRoles([1, 5]);
    usersData[7].addRoles([1, 5]);
    usersData[8].addRoles([1, 5]);
    usersData[9].addRoles([1, 6]);
    usersData[10].addRoles([1, 6]);
    usersData[11].addRoles([1, 6]);
    usersData[12].addRoles([1, 7]);
    usersData[13].addRoles([1, 8]);
    usersData[14].addRoles([1, 4]);
    usersData[15].addRoles([1, 4]);
    usersData[16].addRoles([1, 4]);
    usersData[17].addRoles([1, 4]);
    usersData[18].addRoles([1, 4]);
    usersData[19].addRoles([1, 4]);
    usersData[20].addRoles([1, 2, 4]);
    usersData[21].addRoles([1, 2]);
    usersData[22].addRoles([1, 2, 4]);
    usersData[23].addRoles([1, 2]);
    usersData[24].addRoles([1, 2, 4]);
    usersData[25].addRoles([1, 3]);
    usersData[26].addRoles([1, 3]);
    usersData[27].addRoles([1, 3]);
    usersData[28].addRoles([1, 3]);
    usersData[29].addRoles([1, 3, 4]);
    usersData[30].addRoles([1, 3, 4]);
    console.log(usersData.length + " records inserted!");
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

// Seed the DOG table with 12 dogs

const dogSeed = [
    {originId:1, asfId: 2500, name: "Odin", gender: "male", dob: "2020-12-01", microchipId:256556, isPureBred: true, pullCost:200, behaviorIssues: true, medicalIssues: false, size: "mini", weight:20.5, coat: "red" },
    {originId:2, currentlyWithId:18, asfId: 2501, name: "Patches", gender: "male", dob: "2016-05-01", microchipId:8645556, isPureBred: false, secondaryBreed: "border collie", pullCost:200, behaviorIssues: false, medicalIssues: false, size: "small", weight:40.2, coat: "blue merle" },
    {originId:3, asfId: 2502, name: "Misty", gender: "female", dob: "2017-08-01", microchipId:4666, isPureBred:true,  pullCost:200, behaviorIssues:false, medicalIssues: false, size: "medium", weight:50, coat: "black" },
    {originId:4, asfId: 2503, name: "Hercules", gender: "male", dob: "2010-11-01", microchipId:523214, isPureBred: false, secondaryBreed: "pit", pullCost:200, behaviorIssues: true, medicalIssues: false, size: "large", weight:66.8, coat: "black" },
    {originId:5,currentlyWithId:14, asfId: 2504, name: "Abby", gender: "female", dob: "2020-12-01", isPureBred: true, pullCost:200, behaviorIssues: true, medicalIssues: false, size: "mini", weight:22, coat: "tri-color" },
    {originId:6, asfId: 2505, name: "Kaitie", gender: "female", dob: "2016-05-01", isPureBred: false, secondaryBreed: "border Collie", pullCost:200, behaviorIssues: false, medicalIssues: false, size: "medium", weight:50.6, coat: "red" },
    {originId:7,currentlyWith:17, asfId: 2506, name: "Bindi", gender: "female", dob: "2017-08-01", isPureBred: true, pullCost:200, behaviorIssues: false, medicalIssues: false, size: "small", weight: 38, coat: "red" },
    {originId:8, asfId: 2507, name: "George", gender: "male", dob: "2017-08-01", microchipId:82665, isPureBred: false, secondaryBreed: "retriever", pullCost:200, behaviorIssues:true, medicalIssues: false, size: "small", weight:40.2, coat: "tri-color" },
    {originId:1,currentlyWithId:15, asfId: 2508, name: "Maya", gender: "female", dob: "2016-05-01", isPureBred: true, pullCost:200, behaviorIssues:true, medicalIssues: false, size: "mini", weight:25, coat: "red merle" },
    {originId:2, asfId: 2509, name: "Tonni", gender: "female", dob: "2017-08-01", microchipId:822636, isPureBred: false, secondaryBreed: "retriever", pullCost:200, behaviorIssues:false, medicalIssues: false, size: "medium", weight: 45.2, coat: "red merle" },
    {originId:3,currentlyWithId:14, asfId: 2510, name: "Champ", gender: "male", dob: "2020-12-01", microchipId:522555, isPureBred: true, pullCost:200, behaviorIssues:true, medicalIssues: false, size: "small", weight:40.2, coat: "tri-color" },
    {originId:4, asfId: 2511, name: "Gabrielle", gender: "female", dob: "2010-11-01", microchipId:56566, isPureBred: false, secondaryBreed: "border collie", pullCost:200, behaviorIssues:true, medicalIssues: false, size: "medium", weight:55.3, coat: "black" },
    {originId:5,currentlyWithId:16, asfId: 2512, name: "Xena", gender: "female", dob: "2010-11-01", microchipId:5363, isPureBred: true, pullCost:200, behaviorIssues:true, medicalIssues: false, size: "mini", weight:19, coat: "blue merle" },
    {originId:6, asfId: 2513, name: "Reina", gender: "female", dob: "2016-05-01", isPureBred: false, secondaryBreed: "german shepherd", pullCost:200, behaviorIssues:false, medicalIssues: false, size: "medium", weight: 50, coat: "tri-color" },
    {originId:7, currentlyWithId:17, asfId: 2514, name: "Titan", gender: "male", dob: "2010-11-01", isPureBred: true, pullCost:200, behaviorIssues:false, medicalIssues: false, size: "large", weight:67.78, coat: "black" },
    {originId:10, currentlyWithId:15, asfId: 2515, name: "Billie", gender: "female", dob: "2020-12-01", microchipId:5966, isPureBred: false, secondaryBreed: "pit", pullCost:200, behaviorIssues:true, medicalIssues: false, size: "large", weight: 70, coat: "blue merle" }
];

db.Dog.bulkCreate(dogSeed);