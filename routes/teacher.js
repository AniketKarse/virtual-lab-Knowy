var express = require('express');
const User = require('../models/user-model')
const Teacher = require('../models/teacher-model');
const jwt = require('jsonwebtoken')
var router = express.Router();

require('../middleware/verify')

router.get('', (req, res) => {

    res.render('admin/teacher-dashboard')

})

// router.get('/fetchStudentData:id', async (req, res) => {

//     console.log(req.params)
    
//     try {
        
//         const studentData = await User.findById("63ff774197c5042ce469d31d")
//         console.log(studentData)
//         res.send(studentData)

//     } catch (error) {
//         res.send(error)
//     }

// })

// To SAVE TEACHER
router.post('/saveTeacher', async (req, res) => {

    const teacher = new Teacher(req.body)

    await teacher.save()

})

// Login Teacher PAGE
router.get('/login', (Req, res) => {
    res.render('admin/teacherLogin')
})

// To Login Teacher
router.post('/login', async (req, res) => {

    console.log(req.body)

    const isExist = await User.exists({teacherID: req.body.teacherID})
  
    if(isExist == null){
      res.json({error: "Invalid User ID"});
      return
    }
  
    // console.log(req.body)
    const filter = {teacherID : req.body.teacherID};
    const teacher = await Teacher.findOne(filter);
    
  
    // console.log(req.body.studentID)
  
    if(teacher.password != req.body.password){
      res.json({error: "Invalid Password"});
      return
    }
  
    teacher.password = null
  
    // console.log(user)
  
    jwt.sign({ teacher }, "THIS IS SECREAT", (err, token) => {
      res.json({token: token, teacher: teacher})
    })
  
     
  
  })








module.exports = router;