// require('dotenv').config()
var express = require('express');
var moment = require('moment');
const jwt = require('jsonwebtoken')
var router = express.Router();


const User = require('../models/user-model')


function convertDate(){

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
router.post('/login', (req, res) => {

  


})

/* GET users listing. */
router.get('/', function (req, res, next) {
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


// Get the list of students
router.get('/student_list', async (req, res) => {

  try {

    const filter = {};
    const all = await User.find(filter);

    // console.log(all)
    res.send(all)
    
  } catch (error) {
    res.send(500)
  }

})

// Get the single student by studentID
router.get('/getStudent:studentID', async (req, res) => {

  try {

    const studentID = req.params.studentID
    // const user = await User.findById("63fc95859ea17f3087262903")
    // res.send(user)

    const user = await User.find({studentID: studentID})
    res.send(user)

  } catch (error) {
    res.send(500)
  }

})

// Update the attendence of user
router.post('/updateAttendence/:studentID', async (req, res) => {
  
  var today = convertDate()
  today = "2023-03-12"

  await User.findOneAndUpdate({studentID : "19BE002"},
    {$push:{attendance: [today]}}
  )

})


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

// C++

router.get('/me/cpp/pract-1', (req, res) => {
  res.render('3cpp/1')
})


// COMPILER
router.get('/me/compiler', (req, res) => {
  res.render('compiler/compiler')
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
