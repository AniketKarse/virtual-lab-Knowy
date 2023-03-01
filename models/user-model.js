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
    attendance : 
        [
            {
                type: String
            }
        ],
    htmlScore: {
       
            
                pract1: {
                    score: {
                        type: Number
                    },
                    timeStamp:{
                        type: String
                    }
                },
            
            
                pract2: {
                    score: {
                        type: Number
                    },
                    timeStamp:{
                        type: String
                    }
                },
            
            
                pract3: {
                    score: {
                        type: Number
                    },
                    timeStamp:{
                        type: String
                    }
                },
            
            
                pract4: {
                    score: {
                        type: Number
                    },
                    timeStamp:{
                        type: String
                    }
                },
            
            
                pract5: {
                    score: {
                        type: Number
                    },
                    timeStamp:{
                        type: String
                    }
                }
            

        
    },
})


const User = mongoose.model('User', userSchema)

module.exports = User