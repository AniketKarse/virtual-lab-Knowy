var express = require('express');
var router = express.Router();
const User = require('../models/user-model')



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', (req, res, next) => {
  res.render('dashboard', { name: 'Shreyash', class: '10th' })
})

// To Save User
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

// To Update Htm Score (TEST)
router.post('/updateHTML', async (req, res) => {

  var user_id = '63f37651af4dd26e167cf1ef';
  User.findByIdAndUpdate(user_id, {name: 'Shreyash'}, (err, docs) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Updated User : ", docs);
    }
  })

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


// COMPILER
router.get('/me/compiler', (req, res) => {
  res.render('compiler/compiler')
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
