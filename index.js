const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4800;
const { name } = require('ejs')
const monoogse = require('mongoose')
const users = [];

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT;
const MONGO_URI = process.env.URI;



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