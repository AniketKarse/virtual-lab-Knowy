const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age cannot be -Ve")
            }
        }
    },
    studentID: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    totalScore: {
        type: Number
    },
    password: {
        type: String
    },
    attendance:
        [
            {
                type: String,
                unique: true
            }
        ],
    profilePic:{
        type: String
    },
    htmlScore: {


        pract1: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String,
                default: Date.now
            }
        },


        pract2: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String,
                default: Date.now
            }
        },


        pract3: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String,
                default: Date.now
            }
        },


        pract4: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String,
                default: Date.now
            }
        },


        pract5: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String,
                default: Date.now
            }
        }



    },

    physicsScore: {

        pract1: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract2: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract3: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract4: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract5: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        }

    },

    chemistryScore: {

        pract1: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract2: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract3: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract4: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract5: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        }

    },

    biologyScore: {

        pract1: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract2: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract3: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract4: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract5: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        }

    },

    cppScore: {

        pract1: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract2: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract3: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract4: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        },

        pract5: {
            score: {
                type: Number
            },
            timeStamp: {
                type: String
            }
        }

    }
})




const User = mongoose.model('User', userSchema)

module.exports = User