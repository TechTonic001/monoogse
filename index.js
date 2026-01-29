const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4800;
const monoogse = require('mongoose')

const port = process.env.PORT;
const MONGO_URI = process.env.URI;

monoogse.connect(MONGO_URI)
    .then(() => 
        console.log("Connected to MongoDB"))
    .catch((err) => 
        console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});