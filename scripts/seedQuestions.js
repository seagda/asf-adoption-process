const db = require("../models");


// Seed the ASSESSMENT Question Category table
const assessQuestCatSeed = [
    { name: "Compliance/Commands" },
    { name: "Fear/Aggression Response" },
    { name: "Touch Sensitivity" }
];

// Seed the Assessment Question table
const assessQuestSeed = [
    {desc: "Sit", AssessQuestionCategoryId: 1},
    {desc: "Down", AssessQuestionCategoryId: 1},
    {desc: "Stay", AssessQuestionCategoryId: 1},
    {desc: "Leave It", AssessQuestionCategoryId: 1},
    {desc: "Drop it", AssessQuestionCategoryId: 1},
    {desc: "Recall (comes when called)", AssessQuestionCategoryId: 1},
    {desc: "Heel", AssessQuestionCategoryId: 1},
    {desc: "Fetch", AssessQuestionCategoryId: 1},
    {desc: "Go In Crate", AssessQuestionCategoryId: 1},
    {desc: "Cats", AssessQuestionCategoryId: 2},
    {desc: "Dogs", AssessQuestionCategoryId: 2},
    {desc: "Small pets", AssessQuestionCategoryId: 2},
    {desc: "Cars", AssessQuestionCategoryId: 2},
    {desc: "Streets", AssessQuestionCategoryId: 2},
    {desc: "Strange objects, e.g., lawn tractors", AssessQuestionCategoryId: 2},
    {desc: "New places", AssessQuestionCategoryId: 2},
    {desc: "New people", AssessQuestionCategoryId: 2},
    {desc: "New things ", AssessQuestionCategoryId: 2},
    {desc: "People wearing hats", AssessQuestionCategoryId: 2},
    {desc: "People wearing sunglasses", AssessQuestionCategoryId: 2},
    {desc: "People wearing hoodies", AssessQuestionCategoryId: 2},
    {desc: "People with facial hair", AssessQuestionCategoryId: 2},
    {desc: "Babies", AssessQuestionCategoryId: 2},
    {desc: "Children", AssessQuestionCategoryId: 2},
    {desc: "Knocking at the door", AssessQuestionCategoryId: 2},
    {desc: "Severe Weather ", AssessQuestionCategoryId: 2},
    {desc: "Loud Noises", AssessQuestionCategoryId: 2},
    {desc: "Strangers on property", AssessQuestionCategoryId: 2},
    {desc: "Strangers in public", AssessQuestionCategoryId: 2},
    {desc: "Adult Women", AssessQuestionCategoryId: 2},
    {desc: "Adult Men", AssessQuestionCategoryId: 2},
    {desc: "Touch your dogs at all", AssessQuestionCategoryId: 3},
    {desc: "Toes for clipping nails", AssessQuestionCategoryId: 3},
    {desc: "Legs", AssessQuestionCategoryId: 3},
    {desc: "Hindquarters", AssessQuestionCategoryId: 3},
    {desc: "Neck", AssessQuestionCategoryId: 3},
    {desc: "Collar", AssessQuestionCategoryId: 3},
    {desc: "Head", AssessQuestionCategoryId: 3},
    {desc: "Muzzle", AssessQuestionCategoryId: 3},
    {desc: "Belly", AssessQuestionCategoryId: 3},
    {desc: "Flank", AssessQuestionCategoryId: 3},
    {desc: "Put leash and collar off and on", AssessQuestionCategoryId: 3},
    {desc: "Brushing", AssessQuestionCategoryId: 3}
];

// Seed the APPLICATION Question Category  table
const appQuestCatSeed = [
    { name: "Your History and Experience" },
    { name: "Your Home" },
    { name: "Your Lifestyle" },
    { name: "Your Pets" },    
    { name: "Your Veterinarian" },
    { name: "Your Adoption Preferences" }
];

// Seed the APPLICATION Question table
// const appQuestSeed = [
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:},
//     { name: "", title: "", type: "", isRequired: , dependsOnAnswer: , dependsOnQuestionId:, AppQuestionCategoryId:}
// ];


// use bulkCreate method to insert the above records
 
Promise.all([
    db.AssessQuestionCategory.bulkCreate(assessQuestCatSeed),
    db.AppQuestionCategory.bulkCreate(appQuestCatSeed)
]).then(() => db.AssessQuestion.bulkCreate(assessQuestSeed))
  .catch(console.error);