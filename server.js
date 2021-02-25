const env = process.env.NODE_ENV || "development";
const path = require("path");

if (env === "development") require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// must be logged in for api routes
app.use("/api", require("./middleware/verifyToken"));

// API routes go here

app.use("/api/auth", require("./controllers/auth"));
app.use("/api/dog", require("./controllers/dog"));


if (env === "production") {
    app.use(express.static("client/build"));
    app.get((req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));
}

db.sequelize.sync({ force: false }).then(() => app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`)));