var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', (req, res, next) => {
  res.render('dashboard', {name:'Shreyash', class:'10th'})
})

router.get('/me/physics', (req, res) => {
  res.render('physics/physicsPract')
})

router.get('/me/physics/pract-1', (req, res) => {
  res.render('physics/1')
})

router.get('/me/html', (req, res) => {
  res.render('html/htmlPract')
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
