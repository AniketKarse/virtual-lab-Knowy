var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/compiler', (req, res) => {
  res.render('/views/compiler/compiler.hbs')
} )






module.exports = router;




