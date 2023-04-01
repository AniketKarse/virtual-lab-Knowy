var express = require('express');
var router = express.Router();
const User = require('../models/user-model')


router.get('/getListOfScore', async (req, res) => {

    const userList = await User.find({})

    const obj = {};

    for (const key of userList) {
        obj[key.name] = key.totalScore
    }


    const sortedScoresinDecendingOrder = Object.entries(obj)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    // console.log(sortedScoresinDecendingOrder);

    res.json(sortedScoresinDecendingOrder)


})


module.exports = router;