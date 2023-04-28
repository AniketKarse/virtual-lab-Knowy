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
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    totalScore: {
        type: Number,
        default: 0
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
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },


        pract2: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },


        pract3: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },


        pract4: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },


        pract5: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        }



    },

    physicsScore: {

        pract1: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract2: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract3: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract4: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract5: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        }

    },

    chemistryScore: {

        pract1: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract2: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract3: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract4: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract5: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        }

    },

    biologyScore: {

        pract1: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract2: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract3: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract4: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract5: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        }

    },

    cppScore: {

        pract1: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract2: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract3: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract4: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        },

        pract5: {
            score: {
                type: Number,
                default: 0
            },
            timeStamp: {
                type: String,
                default: "00-00-0000"
            }
        }

    }
})




const User = mongoose.model('User', userSchema)

module.exports = User