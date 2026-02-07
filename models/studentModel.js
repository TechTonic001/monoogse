
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const studentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    gender: { type: String, required: true },
    isGraduate: { type: Boolean, required: true }
});

const studentModel = model("SQI_STUDENT", studentSchema);
module.exports = studentModel;