const env = process.env.NODE_ENV || "development";
const path = require("path");

if (env === "development") require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes go here

if (env === "production") {
    app.use(express.static("client/build"));
    app.get((req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));
}

app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`));