var express = require('express');
var router = express.Router();
const User = require('../models/user-model')


 /* This code convert javascript standard date to simple dd/mm/yyyy format */
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
        var today = dd + '/' + mm + '/' + yyyy;

        return today

}


router.get('/updateHtmlScore/:score/:practNo/:studentID', async (req, res) => {

    console.log(req.params)

    const practNo = req.params.practNo

    try {

        const filter = { studentID: req.params.studentID }
      
        var update

        today = convertDate()

        

        if(practNo == "pract1"){

            update = {"$set": {
                "htmlScore.pract1.score" : Number(req.params.score),
                "htmlScore.pract1.timeStamp" : today
             }}

        }

        if(practNo == "pract2"){

            update = {"$set": {
                "htmlScore.pract2.score" : Number(req.params.score),
                "htmlScore.pract2.timeStamp" : today
             }}

        }

        if(practNo == "pract3"){

            update = {"$set": {
                "htmlScore.pract3.score" : Number(req.params.score),
                "htmlScore.pract3.timeStamp" : today
             }}

        }

        if(practNo == "pract4"){

            update = {"$set": {
                "htmlScore.pract4.score" : Number(req.params.score),
                "htmlScore.pract4.timeStamp" : today
             }}

        }

        if(practNo == "pract5"){

            update = {"$set": {
                "htmlScore.pract5.score" : Number(req.params.score),
                "htmlScore.pract5.timeStamp" : today
             }}

        }

        let doc = await User.findOneAndUpdate(filter, update,  {new: true, setDefaultsOnInsert: true} )

        console.log(doc)

    } catch (error) {
    console.log(error)
}

})

router.get('/updatePhysicsScore/:score/:practNo/:studentID', async (req, res) => {

    console.log(req.params)

    const practNo = req.params.practNo

    try {

        const filter = { studentID: req.params.studentID }
      
        var update

        today = convertDate()

        

        if(practNo == "pract1"){

            update = {"$set": {
                "physicsScore.pract1.score" : Number(req.params.score),
                "physicsScore.pract1.timeStamp" : today
             }}

        }

        if(practNo == "pract2"){

            update = {"$set": {
                "physicsScore.pract2.score" : Number(req.params.score),
                "physicsScore.pract2.timeStamp" : today
             }}

        }

        if(practNo == "pract3"){

            update = {"$set": {
                "physicsScore.pract3.score" : Number(req.params.score),
                "physicsScore.pract3.timeStamp" : today
             }}

        }

        if(practNo == "pract4"){

            update = {"$set": {
                "physicsScore.pract4.score" : Number(req.params.score),
                "physicsScore.pract4.timeStamp" : today
             }}

        }

        if(practNo == "pract5"){

            update = {"$set": {
                "physicsScore.pract5.score" : Number(req.params.score),
                "physicsScore.pract5.timeStamp" : today
             }}

        }

        let doc = await User.findOneAndUpdate(filter, update,  {new: true, setDefaultsOnInsert: true} )

        console.log(doc)

    } catch (error) {
    console.log(error)
}

})


router.get('/updateChemistryScore/:score/:practNo/:studentID', async (req, res) => {

    console.log(req.params)

    const practNo = req.params.practNo

    try {

        const filter = { studentID: req.params.studentID }
      
        var update

        today = convertDate()

        

        if(practNo == "pract1"){

            update = {"$set": {
                "chemistryScore.pract1.score" : Number(req.params.score),
                "chemistryScore.pract1.timeStamp" : today
             }}

        }

        if(practNo == "pract2"){

            update = {"$set": {
                "chemistryScore.pract2.score" : Number(req.params.score),
                "chemistryScore.pract2.timeStamp" : today
             }}

        }

        if(practNo == "pract3"){

            update = {"$set": {
                "chemistryScore.pract3.score" : Number(req.params.score),
                "chemistryScore.pract3.timeStamp" : today
             }}

        }

        if(practNo == "pract4"){

            update = {"$set": {
                "chemistryScore.pract4.score" : Number(req.params.score),
                "chemistryScore.pract4.timeStamp" : today
             }}

        }

        if(practNo == "pract5"){

            update = {"$set": {
                "chemistryScore.pract5.score" : Number(req.params.score),
                "chemistryScore.pract5.timeStamp" : today
             }}

        }

        let doc = await User.findOneAndUpdate(filter, update,  {new: true, setDefaultsOnInsert: true} )

        console.log(doc)

    } catch (error) {
    console.log(error)
}

})













module.exports = router;