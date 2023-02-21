const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: Number
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age cannot be -Ve")
            }
        },
    },
    email: {
        type: String,
        unique: true
    },
    totalScore: {
        type: String
    },
    password: {
        type: String
    },
    htmlScore: {
        score: [
            {
                "pract-1": {
                    type: Number
                }
            },
            {
                "pract-2": {
                    type: Number
                }
            },
            {
                "pract-3": {
                    type: Number
                }
            },
            {
                "pract-4": {
                    type: Number
                }
            },
            {
                "pract-5": {
                    type: Number
                }
            },

        ]
    },
})


const User = mongoose.model('User', userSchema)

module.exports = User