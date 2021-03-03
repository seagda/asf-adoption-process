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
    { name: "Your Aussie Preferences" },
    { name: "Your Foster Preferences" },
    { name: "Other" }
];

// Seed the APPLICATION Question table
const appQuestBothSeed = [
    { position: 1, name: "dog-owner", title: "Have you ever owned a dog?", type: "boolean", AppQuestionCategoryId:1},
    { position: 2, name: "aussie-owner", title: "Have you ever owned an Aussie?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId: 1, AppQuestionCategoryId:1},
    { position: 3, name: "surrender", title: "Have you ever had to surrender a dog in the past?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId:1, AppQuestionCategoryId:1},
    { position: 4, name: "surrender-why", title: "Why did you have to surrender?", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 1, AppQuestionCategoryId:1},
    { position: 5, name: "animal-cruelty", title: "Have you ever been convicted of animal cruelty or neglect?", type: "boolean", AppQuestionCategoryId:1},
    { position: 6, name: "animal-cruelty-why", title: "Explain the conviction", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 5, AppQuestionCategoryId:1},
    { position: 7, name: "dog-knowledge", title: "Rate your overall knowledge of dog health: basic nutrition, behavior etc", type: "number", AppQuestionCategoryId:1},
    { position: 8, name: "dog-experience-rating", title: "Rate past experience with dogs", type: "number", AppQuestionCategoryId:1},
    { position: 9, name: "aussie-experience", title: "Describe past experience w/Aussies", type: "text", AppQuestionCategoryId:1},
    { position: 10, name: "aussie-experience-rating", title: "Rate past experience with Aussies", type: "number", AppQuestionCategoryId:1},
    { position: 11, name: "is-trainer", title: "Are you a certified trainer?", type: "boolean", AppQuestionCategoryId:8},
    { position: 12, name: "has-trainer", title: "Do you work with a trainer?", type: "boolean", AppQuestionCategoryId:8},
    { position: 13, name: "trainer-info", title: "Trainer's name and contact information:", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId: 12, AppQuestionCategoryId:8},
    { position: 29, name: "own-or-rent", title: "Do you own or rent your home?", type: "radiogroup", AppQuestionOptions:[{name:"Own"},{name:"Rent"}], AppQuestionCategoryId:2},
    { position: 30, name: "landlord-approval", title: "Has your landlord approved a dog?", type: "boolean", dependsOnAnswer: 2, dependsOnQuestionId:14, AppQuestionCategoryId:2},
    { position: 31, name: "inside-outside", title: "Will the dog primarily live inside or outside?", type: "radiogroup", AppQuestionOptions:[{name:"Inside"},{name:"Outside"}], AppQuestionCategoryId:2},
    { position: 32, name: "fenced-yard", title: "Do you have a fenced/walled yard?", type: "boolean", AppQuestionCategoryId:2},
    { position: 33, name: "plans-to-fence", title: "Do you plan to fence your yard before the dog arrives?", type: "boolean", dependsOnAnswer: 0, dependsOnQuestionId: 17, AppQuestionCategoryId:2},
    { position: 34, name: "describe-fence", title: "Describe your fence/wall and its height in feet:", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 17, AppQuestionCategoryId:2},
    { position: 35, name: "crate-gate", title: "Rate your familiarity with crates/baby gates", type: "number", AppQuestionCategoryId:3},
    { position: 36, name: "activity-rating", title: "Rate your general level of activity", type: "number", AppQuestionCategoryId:3},
    { position: 37, name: "activity-list", title: "List activities you regularly enjoy", type: "text", AppQuestionCategoryId:3},
    { position: 38, name: "employed", title: "Are you currently employed?", type: "boolean", AppQuestionCategoryId:3},
    { position: 39, name: "employment-info", title: "List details about employment: where, how long, average income", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:23, AppQuestionCategoryId:3},    
    { position: 40, name: "hours-alone", title: "How many hours will you leave you dog(s) by themselves on a typical day?", type: "number", AppQuestionCategoryId:3},
    { position: 41, name: "has-pets", title: "Do you have any pets in your care?", type: "boolean", AppQuestionCategoryId:4},
    { position: 42, name: "pets-shots", title: "Are your pets up to date on their vaccinations?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId:26, AppQuestionCategoryId:4},
    { position: 43, name: "pets-fixed", title: "Are your pets ALL spayed or neutered?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId:26, AppQuestionCategoryId:4},
    { position: 44, name: "has-dogs", title: "Do you have any Dogs?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId:26, AppQuestionCategoryId:4},
    { position: 45, name: "has-aussies", title: "Do you have any Aussies in your care now?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId: 29,  AppQuestionCategoryId:4},
    { position: 46, name: "how-many", title: "How many dogs?", type: "number", dependsOnAnswer: 1, dependsOnQuestionId: 29, AppQuestionCategoryId:4},
    { position: 47, name: "has-cats", title: "Do you have any cats?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId: 26, AppQuestionCategoryId:4},
    { position: 48, name: "cat-with-dogs", title: "Rate your cats comfortability around dogs", type: "number", dependsOnAnswer: 1, dependsOnQuestionId:32, AppQuestionCategoryId:4},
    { position: 49, name: "pet-types", title: "List other animals in the home: types, breeds, ages", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:26, AppQuestionCategoryId:4},
    { position: 50, name: "has-kids", title: "Are there any kids living in the home?", type: "boolean", AppQuestionCategoryId:5},
    { position: 51, name: "kids-and-dogs", title: "Rate your children's familiarity with dogs", type: "number", dependsOnAnswer: 1, dependsOnQuestionId: 35, AppQuestionCategoryId:5},
    { position: 52, name: "household-other", title: "Are there other people/relatives that live in the home?", type: "boolean", AppQuestionCategoryId:5},
    { position: 53, name: "familymembers", title: "List any other people that live in the home: ages & relationship", type: "text", dependsOnAnswer: 1, dependsOnQuestionId: 37,  AppQuestionCategoryId:5},
    { position: 54, name: "household-agrees", title: "Is everyone on board with adoption?", type: "boolean", dependsOnAnswer: 1, dependsOnQuestionId: 37, AppQuestionCategoryId:5},
    { position: 55, name: "has-vet", title: "Do you have a vet you currently use?", type: "boolean", AppQuestionCategoryId:6},
    { position: 56, name: "time-with-vet", title: "How long have you been with your current vet?"	, type: "number", dependsOnAnswer: 1, dependsOnQuestionId:40, AppQuestionCategoryId:6},
    { position: 57, name: "vet-info", title: "Enter contact info for vet", type: "text", dependsOnAnswer: 1, dependsOnQuestionId:40, AppQuestionCategoryId:6},
    { position: 58, name: "pref-coat", title: "Preferred Coats/Colors (check all that apply):", type: "checkbox", AppQuestionOptions:[{name:"double merle"},{name:"black and tan"},{name:"blue merle"},{name:"red merle"},{name:"red"},{name:"red bi-color"},{name:"tri-color"},{name:"black"},{name:"black bi-color"},{name:"brown"},{name:"white"}], AppQuestionCategoryId:7},
    { position: 59, name: "pref-genders", title: "Preferred Gender:", type: "radiogroup", AppQuestionOptions:[{name:"male"},{name:"female"},{name:"either"}], AppQuestionCategoryId:7},
    { position: 60, name: "pref-ages", title: "Preferred Ages (check all that apply):", type: "checkbox", AppQuestionOptions:[{name:"puppy"},{name:"adult"},{name: "senior"}], AppQuestionCategoryId:7},
    { position: 61, name: "med-issues-ok", title: "Are you willing/able to care for dogs with MEDICAL needs", type: "boolean", AppQuestionCategoryId:7},
    { position: 62, name: "wants-asf-dog", title: "Are you interested in a rescued/fostered dog currently with ASF?", type: "boolean", AppQuestionCategoryId:9},
    { position: 63, name: "questions-notes", title: "List any other information we should know or questions you have", type: "text", AppQuestionCategoryId:9},
    { position: 64, name: "how-hear", title: "How did you hear about ASF?", type: "text", AppQuestionCategoryId:9}
];

const appQuestAdopterSeed = [
    { position: 14, name: "why-an-aussie", title: "Why do you want an aussie?", type: "text", AppQuestionCategoryId:1},
    { position: 15, name: "what-use", title: "What is the dog 'for'?", type: "text", AppQuestionCategoryId:1},
    { position: 16, name: "plans-to-exercise", title: "How do you plan to give you pup regular activity?", type: "text", dependsOnAnswer: 0, dependsOnQuestionId: 17, AppQuestionCategoryId:3},
    { position: 17, name: "other-asf-aussie", title: "If this dog isn't quite a match, are you interested in other ASF rescues?", type: "boolean", AppQuestionCategoryId:7},
];

const appQuestFosterSeed = [
    { position: 18, name: "why-foster", title: "Why do you want to foster Aussies?", type: "text", AppQuestionCategoryId:8},
    { position: 19, name: "availability", title: "Are you available 365 days a year?", type: "boolean", AppQuestionCategoryId:8},
    { position: 20, name: "why-not-avail", title: "Why not?", type: "text", dependsOnAnswer: 0, dependsOnQuestionId: 55, AppQuestionCategoryId:8},
    { position: 21, name: "foster-length", title: "How long are you willing to foster?", type: "text", AppQuestionCategoryId:8},
    { position: 22, name: "can-transport", title: "Can and will you transport rescue dogs to the vet when needed?", type: "boolean", AppQuestionCategoryId:8},
    { position: 23, name: "will-pickup", title: "Can and will you travel to pick up rescued dogs?", type: "boolean", AppQuestionCategoryId:8},
    { position: 24, name: "how-far", title: "How many miles from your home:", type: "number", dependsOnAnswer: 1, dependsOnQuestionId: 59, AppQuestionCategoryId:8},
    { position: 25, name: "more-than-one", title: "Can and would you foster more than one rescue at a time?", type: "boolean", AppQuestionCategoryId:8},
    { position: 26, name: "medical-needs", title: "Can you foster dogs with special MEDICAL needs?", type: "boolean", AppQuestionCategoryId:8},
    { position: 27, name: "behavioral-needs", title: "Can you foster dogs with special BEHAVIORAL needs?", type: "boolean", AppQuestionCategoryId:8}
];

// use bulkCreate method to insert the above records
 
Promise.all([
    db.AssessQuestionCategory.bulkCreate(assessQuestCatSeed),
    db.AppQuestionCategory.bulkCreate(appQuestCatSeed)
]).then(() => db.AssessQuestion.bulkCreate(assessQuestSeed))
  .then(() => db.AppQuestion.bulkCreate(appQuestBothSeed, {include: db.AppQuestionOption})
    .then(appQuestions => appQuestions.forEach(appQuestion => appQuestion.addAppTypes([1, 2]))))
  .then(() => db.AppQuestion.bulkCreate(appQuestAdopterSeed, {include: db.AppQuestionOption})
    .then(appQuestions => appQuestions.forEach(appQuestion => appQuestion.addAppType(1))))
  .then(() => db.AppQuestion.bulkCreate(appQuestFosterSeed, {include: db.AppQuestionOption})
    .then(appQuestions => appQuestions.forEach(appQuestion => appQuestion.addAppType(2))))
  .catch(console.error);