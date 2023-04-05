var express = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/user-model');
var router = express.Router();

require('../middleware/verify')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// To Login User
router.post('/login', async (req, res) => {

  const isExist = await User.exists({studentID: req.body.studentID})

  if(isExist == null){
    res.json({error: "Invalid User ID"});
    return
  }

  // console.log(req.body)
  const filter = {studentID : req.body.studentID};
  const user = await User.findOne(filter);
  

  // console.log(req.body.studentID)

  if(user.password != req.body.password){
    res.json({error: "Invalid Password"});
    return
  }

  user.password = null

  // console.log(user)

  jwt.sign({ user }, "THIS IS SECREAT", (err, token) => {
    res.json({token: token, user: user})
  })

   

})

router.get('/login', (req, res) => {
  res.render('login')
})


// router.get()

module.exports = router;
