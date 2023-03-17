var express = require('express');
var moment = require('moment');
const jwt = require('jsonwebtoken')
var router = express.Router();


function verifyToken(req, res, next) {



    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        console.log(token)

        jwt.verify(token, "THIS IS SECREAT", (err, authData) => {
            if (err) {
                res.send({ Result: "invalid Token" })
            } else {
                // res.send({ Result: "Good to GO" })
                req.token = token
                 next()
            }
        })
        
    } else {
        res.send({
            result: 'Token not found'
        })
    }



}


module.exports = verifyToken