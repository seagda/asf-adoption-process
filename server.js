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

app.use("/auth", require("./controllers/authController"));
app.use("/api/dashboard", require("./controllers/dashboardController"));
app.use("/api/user", require("./controllers/userController"));
app.use("/api/dog", require("./controllers/dogController"));
app.use("/api/address", require("./controllers/addressController"));
app.use("/api/event", require("./controllers/eventController"));
app.use("/api/contact", require("./controllers/extContactController"));
app.use("/api/region", require("./controllers/regionController"));
app.use("/api/app", require("./controllers/appController"));

if (env === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));
}

db.sequelize.sync({ force: process.env.FORCE_SYNC }).then(() => app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`))); 