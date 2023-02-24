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
       
            
                pract1: {
                    type: Number
                },
            
            
                pract2: {
                    type: Number
                },
            
            
                pract3: {
                    type: Number
                },
            
            
                pract4: {
                    type: Number
                },
            
            
                pract5: {
                    type: Number
                }
            

        
    },
})


const User = mongoose.model('User', userSchema)

module.exports = User