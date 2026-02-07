const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4880;
const { name } = require('ejs')
const monoogse = require('mongoose');
const { saveStudent, getAllStudents } = require("./Controllers/studentContoller");
// const { string } = require("yup");
const users = [];

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const port = process.env.PORT;
const MONGO_URI = process.env.URI;
// const { Schema, model } = monoogse

// schema
// const studentSChema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     age: { type: Number, required: true },
//     course: { type: String, required: true },
//     gender: { type: String, required: true },
//     isGraduate: { type: Boolean, required: true }
    
// })
// const studentMOdel = model('SQI_STUDENT', studentSChema)
// app.get("/testing", (req, res) => {
//     const big = new studentMOdel({
//         name: 'ope',
//         age: 49,
//         course: 'FIshery',
//         gender: 'Male',
//     })
//     big.save();
// })


app.get("/teststudents", saveStudent);
app.get("/allstudents", getAllStudents)



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