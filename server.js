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

app.use("/auth", require("./routes/auth"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/user", require("./routes/user"));
app.use("/api/dog", require("./routes/dog"));
app.use("/api/address", require("./routes/address"));
app.use("/api/event", require("./routes/event"));
app.use("/api/contact", require("./routes/extContact"));
app.use("/api/region", require("./routes/region"));
app.use("/api/app", require("./routes/app"));
app.use("/api/role", require("./routes/role"));

if (env === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));
}

db.sequelize.sync().then(() => app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`))); 