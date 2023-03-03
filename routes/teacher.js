var express = require('express');
const User = require('../models/user-model')
var router = express.Router();

router.get('', (req, res) => {

    res.render('admin/teacher-dashboard')

})

router.get('/fetchStudentData:id', async (req, res) => {

    console.log(req.params)
    
    try {
        
        const studentData = await User.findById("63ff774197c5042ce469d31d")
        console.log(studentData)
        res.send(studentData)

    } catch (error) {
        res.send(error)
    }

})






module.exports = router;