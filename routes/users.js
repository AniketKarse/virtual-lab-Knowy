// require('dotenv').config()
var express = require('express');
var moment = require('moment');
const jwt = require('jsonwebtoken')
const multer  = require('multer')
const upload = multer({ dest: './public/profileUploads/' })
var router = express.Router();

require('../middleware/verify')


const User = require('../models/user-model');
const verifyToken = require('../middleware/verify');


function convertDate() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var today = yyyy + '-' + mm + '-' + dd;

  return today

}

// To Login User
// router.post('/login', (req, res) => {

//   const user = {
//     name: "Shreyash",
//     id: "19BE007"
//   }

//   jwt.sign({ user }, "THIS IS SECREAT", (err, token) => {
//     res.send(token)
//   })

// })

/* GET users listing. */
router.post('/', verifyToken, function (req, res, next) {
  jwt.verify(req.token, "THIS IS SECREAT", (err, authData) => {
    if (err) {
      res.send({ Result: "invalid Token" })
    }else{
      res.send({ Result: "Good to GO" })
    }
  })
  res.send('respond with a resource');
});

router.get('/me', (req, res, next) => {
  res.render('dashboard', { name: 'Shreyash', class: '10th' })
})

// To Save User "REGISTRATION"
router.post('/saveUser', async (req, res) => {
  console.log(req.body)
  const user = new User(req.body)
  try {
    await user.save()

    res.status(201).send(user)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

// To remove USER
router.post('/removeUser', async (req, res) => {

  console.log(req.body)

  try {
    const user = await User.findOneAndDelete({studentID: req.body.studentID})
    res.status(201).json(user)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }

})


// Get the list of students
router.get('/student_list', verifyToken, async (req, res) => {

  try {

    const filter = {};
    const all = await User.find(filter);

    // console.log(all)
    res.send(all)

  } catch (error) {
    res.sendStatus(500)
  }

})

// Get the single student by studentID
router.get('/getStudent:studentID', async (req, res) => {

  try {

    const studentID = req.params.studentID
    // const user = await User.findById("63fc95859ea17f3087262903")
    // res.send(user)

    const user = await User.find({ studentID: studentID })
    res.send(user)

  } catch (error) {
    res.send(500)
  }

})

// Update the attendence of user
router.post('/updateAttendence/:studentID', async (req, res) => {

  var today = convertDate()
  today = "2023-03-14"

  const studentID = req.params.studentID

  try {
    await User.findOneAndUpdate({ studentID: studentID },
      { $push: { attendance: [today] } }, {new: true, setDefaultsOnInsert: true}
    )
  } catch (error) {
    res.send(error)
  }


})

// Upload Profile Picture
router.post('/upload', upload.single('uploaded_file'),  (req, res) => {
  
  console.log(req.file, req.body)

  const update = {profilePic: req.body.filename}


  // const studentID = req.params.studentID
  // console.log(studentID)
  // try {
  //   await User.findOneAndUpdate({ studentID: studentID },{update})
  // } catch (error) {
  //   res.send(error)
  // }





});


// PHYSICS
router.get('/me/physics', (req, res) => {
  res.render('2physics/physicsPract')
})

router.get('/me/physics/pract-1', (req, res) => {
  res.render('2physics/1')
})

router.get('/me/physics/pract-2', (req, res) => {
  res.render('2physics/2')
})

router.get('/me/physics/pract-3', (req, res) => {
  res.render('2physics/3')
})

router.get('/me/physics/pract-4', (req, res) => {
  res.render('2physics/4')
})

router.get('/me/physics/pract-5', (req, res) => {
  res.render('2physics/5')
})

// HTML
router.get('/me/html', (req, res) => {
  res.render('1html/htmlPract')
})

router.get('/me/html/pract-1', (req, res) => {
  res.render('1html/html-1')
})

router.get('/me/html/pract-2', (req, res) => {
  res.render('1html/html-2')
})

router.get('/me/html/pract-3', (req, res) => {
  res.render('1html/html-3')
})

router.get('/me/html/pract-4', (req, res) => {
  res.render('1html/html-4')
})

router.get('/me/html/pract-5', (req, res) => {
  res.render('1html/html-5')
})

// C

router.get('/me/cpp', (req, res) => {
  res.render('3cpp/cppPract')
})

router.get('/me/cpp/pract-1', (req, res) => {
  res.render('3cpp/1')
})

router.get('/me/cpp/pract-2', (req, res) => {
  res.render('3cpp/2')
})

router.get('/me/cpp/pract-3', (req, res) => {
  res.render('3cpp/3')
})

router.get('/me/cpp/pract-4', (req, res) => {
  res.render('3cpp/4')
})

router.get('/me/cpp/pract-5', (req, res) => {
  res.render('3cpp/5')
})

// BIOLOGY

router.get('/me/biology', (req, res) => {
  res.render('3biology/biologyPract')
})

router.get('/me/biology/pract-1', (req, res) => {
  res.render('3biology/1')
})

router.get('/me/biology/pract-2', (req, res) => {
  res.render('3biology/2')
})

router.get('/me/biology/pract-3', (req, res) => {
  res.render('3biology/3')
})

router.get('/me/biology/pract-4', (req, res) => {
  res.render('3biology/4')
})

router.get('/me/biology/pract-5', (req, res) => {
  res.render('3biology/5')
})

// CHEMISTRY

router.get('/me/chemistry', (req, res) => {
  res.render('4chemistry/chemistryPract')
})

router.get('/me/chemistry/pract-1', (req, res) => {
  res.render('4chemistry/1')
})

router.get('/me/chemistry/pract-2', (req, res) => {
  res.render('4chemistry/2')
})


router.get('/me/chemistry/pract-3', (req, res) => {
  res.render('4chemistry/3')
})


router.get('/me/chemistry/pract-4', (req, res) => {
  res.render('4chemistry/4')
})


router.get('/me/chemistry/pract-5', (req, res) => {
  res.render('4chemistry/5')
})




// COMPILER
router.get('/me/compiler/cpp', (req, res) => {
  res.render('compiler/cpp')
})

router.get('/me/compiler/java', (req, res) => {
  res.render('compiler/java')
})

router.get('/me/compiler/python', (req, res) => {
  res.render('compiler/python')
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
