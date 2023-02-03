var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', (req, res, next) => {
  res.render('dashboard', {name:'Shreyash', class:'10th'})
})

// PHYSICS
router.get('/me/physics', (req, res) => {
  res.render('2physics/physicsPract')
})

router.get('/me/physics/pract-1', (req, res) => {
  res.render('2physics/1')
})

// HTML
router.get('/me/html', (req, res) => {
  res.render('1html/htmlPract')
})

router.get('/me/html/pract-1', (req, res) => {
  res.render('1html/html-1')
})


// COMPILER
router.get('/me/compiler', (req, res) => {
  res.render('compiler/compiler')
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
