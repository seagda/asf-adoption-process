const roleSeed = [
  {
    name: "user"
  },
  {
    name: "rescuer"
  },
  {
    name: "adopter"
  },
  {
    name: "foster"
  },
  {
    name: "placement"
  },
  {
    name: "regional"
  },
  {
    name: "superAdmin"
  },
  {
    name: "transporter"
  },
  {
    name: "volunteer"
  }
];

db.Role
  .remove({})
  .then(() => db.Role.collection.insertMany(roleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
