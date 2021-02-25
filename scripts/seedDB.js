const db = require("../models");

const roleSeed = [
  {name: "user"},
  {name: "rescuer"},
  {name: "adopter"},
  {name: "foster"},
  {name: "placement"},
  {name: "regional"},
  {name: "superAdmin"},
  {name: "transporter"},
  {name: "volunteer"}
];

db.Role
  .destroy({where: {}})
  .then(() => db.Role.bulkCreate(roleSeed)
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  );
