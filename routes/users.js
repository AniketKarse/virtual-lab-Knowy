var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', (req, res, next) => {
  res.render('dashboard', {name:'Shreyash', class:'10th'})
})

router.post('/sendForm', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
