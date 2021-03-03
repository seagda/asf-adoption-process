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
    { name: "Your Household" },    
    { name: "Your Veterinarian" },
    { name: "Your Adoption Preferences" }
];

// Seed the APPLICATION Question table
const appQuestSeed = [
    { name: "dog-owner", title: "Are you a first time dog owner?", type: "boolean", AppQuestionCategoryId:1},
    { name: "surrender", title: "Have you ever had to surrender a dog in the past?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId:1, AppQuestionCategoryId:1},
    { name: "surrender-why", title: "Why did you have to surrender?", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 2, AppQuestionCategoryId:1},
    { name: "animal-cruelty", title: "Have you ever been convicted of animal cruelty or neglect?", type: "boolean", AppQuestionCategoryId:1},
    { name: "animal-cruelty-why", title: "Explain the conviction", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 4, AppQuestionCategoryId:1},
    { name: "aussie-owner", title: "Are you a first time Aussie owner?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId:1, AppQuestionCategoryId:1},
    { name: "why-an-aussie", title: "Why do you want an aussie?", type: "text", AppQuestionCategoryId:1},
    { name: "aussie-experience", title: "Describe past experience w/Aussies", type: "text", dependsOnAnswer: 0, dependsOnQuestionId:6, AppQuestionCategoryId:1},
    { name: "what-use", title: "What is the dog 'for'?", type: "text", AppQuestionCategoryId:1},
    { name: "dog-experience-rating", title: "Rate past expereince with dogs", type: "number", AppQuestionCategoryId:1},
    { name: "aussie-experience-rating", title: "Rate past experience with Aussies", type: "number", AppQuestionCategoryId:1},
    { name: "own-or-rent", title: "Do you own or rent your home?", type: "radiogroup", AppQuestionOptions:[{name:"Own"},{name:"Rent"}], AppQuestionCategoryId:2},
    { name: "landlord-approval", title: "Has your landlord approved a dog?", type: "boolean", dependsOnAnswer: 2, dependsOnQuestionId:12, AppQuestionCategoryId:2},
    { name: "inside-outside", title: "Will the dog primarily live inside or outside?", type: "radiogroup", AppQuestionOptions:[{name:"Inside"},{name:"Outside"}], AppQuestionCategoryId:2},
    { name: "fenced-yard", title: "Do you have a fenced yard?", type: "boolean", AppQuestionCategoryId:2},
    { name: "plans-to-fence", title: "Do you plan to fence your yard before the dog is adopted?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId:15, AppQuestionCategoryId:2},
    { name: "plans-to-exercise", title: "How do you plan to give you pup regular activity?", type: "text", dependsOnAnswer: 0, dependsOnQuestionId:16, AppQuestionCategoryId:3},
    { name: "activity-rating", title: "Rate your general level of activity", type: "number", AppQuestionCategoryId:3},
    { name: "activity-list", title: "List activities you regularly enjoy", type: "text", AppQuestionCategoryId:3},
    { name: "home-env", title: "Rate your home environment", type: "number", AppQuestionCategoryId:2},
    { name: "dog-health-knowledge", title: "Rate your overall knowledge of dog health: basic nutrition, behavior etc", type: "number", AppQuestionCategoryId:1},
    { name: "has-vet", title: "Do you have a vet you currently use?", type: "boolean", AppQuestionCategoryId:6},
    { name: "time-with-vet", title: "How long have you been with your current vet?"	, type: "number", dependsOnAnswer: 1, dependsOnQuestionId:22, AppQuestionCategoryId:6},
    { name: "vet-info", title: "Enter contact info for vet", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:22, AppQuestionCategoryId:6},
    { name: "crate-gate", title: "Rate your familiarity with crates/baby gates", type: "number", AppQuestionCategoryId:2},
    { name: "has-kids", title: "Are there any kids living in the home?", type: "boolean", AppQuestionCategoryId:5},
    { name: "kids-and-dogs", title: "Rate your children's familiarity with dogs", type: "number", dependsOnAnswer: 1, dependsOnQuestionId: 26, AppQuestionCategoryId:5},
    { name: "household-other", title: "Are there other people/relatives that live in the home?", type: "boolean", AppQuestionCategoryId:5},
    { name: "familymembers", title: "List any other people that live in the home: ages & relationship", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:28,  AppQuestionCategoryId:5},
    { name: "household-agrees", title: "Is everyone on board with adoption?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId: 28, AppQuestionCategoryId:5},
    { name: "has-cats", title: "Do you have any cats?", type: "boolean", AppQuestionCategoryId:4},
    { name: "cat-with-dogs", title: "Rate your cats comfortability around dogs", type: "number", dependsOnAnswer: 1, dependsOnQuestionId:31, AppQuestionCategoryId:4},
    { name: "pets-other", title: "Do you have any other pets?", type: "boolean", AppQuestionCategoryId:4},
    { name: "pet-types", title: "List other animals in the home: types, breeds, ages", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:33, AppQuestionCategoryId:4},
    { name: "pets-shots", title: "Are your other pets up to date on their vaccinations?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId:33, AppQuestionCategoryId:4},
    { name: "employed", title: "Are you currently employed?", type: "boolean", AppQuestionCategoryId:3},
    { name: "employment-info", title: "List details about employment: where, how long, average income", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:36, AppQuestionCategoryId:3},
    { name: "questions-notes", title: "List any other information we should know or questions you have", type: "text", AppQuestionCategoryId:7},
    { name: "other-asf-aussie", title: "If this dog isn't wuite a match, are you interested in another one?", type: "boolean", AppQuestionCategoryId:7}
];

// use bulkCreate method to insert the above records
 
Promise.all([
    db.AssessQuestionCategory.bulkCreate(assessQuestCatSeed),
    db.AppQuestionCategory.bulkCreate(appQuestCatSeed)
]).then(() => db.AssessQuestion.bulkCreate(assessQuestSeed))
  .then(() => db.AppQuestion.bulkCreate(appQuestSeed, {include: db.AppQuestionOption}).then(appQuestions => appQuestions.forEach(appQuestion => appQuestion.addAppType(1))))
  .catch(console.error);