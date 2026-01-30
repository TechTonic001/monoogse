const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4880;
const { name } = require('ejs')
const monoogse = require('mongoose');
// const { string } = require("yup");
const users = [];

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const port = process.env.PORT;
const MONGO_URI = process.env.URI;
const { Schema, model } = monoogse

// schema
const studentSChema = new Schema({
    name: String,
    age: Number,
    course: String,
    gender: String,
    isGraduate: Boolean
})
const studentMOdel = model('SQI_STUDENT', studentSChema)
app.get("/testing", (req, res) => {
    const big = new studentMOdel({
        name: 'ope',
        age: 49,
        course: 'FIshery',
        gender: 'Male',
    })
    big.save();
})



// signup
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/confirm', (req, res) => {
    const user = req.body;
    users.push(user)
    console.log(users);
    res.send('sign in sucessfull')
})

// login
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/enter', (req, res) => {
    const user = req.body;
    users.push(user)
    console.log(users);
    res.send('login succesfull')
})




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