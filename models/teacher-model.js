const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: {
        type: String
    },
    subject: {
        type: String
    },
    teacherID: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    designation: {
        type: String
        
    }
})


const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher