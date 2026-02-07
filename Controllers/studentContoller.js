const studenModel = require('../models/studentModel');
const saveStudent = (req, res) => {
    const big = new studentModel({
        name: 'ope',
        age: 49,
        course: 'FIshery',
        gender: 'Male',
    })
    big.save();
    res.send({ message: "Student saved" })
}
const getAllStudents = (req, res) => {
    res.send({ message: "Students" })
}



module.exports = {
    saveStudent,
    getAllStudents
}