var express = require('express');
var router = express.Router();

router.get('', (req, res) => {

    res.render('admin/teacher-dashboard')

})




module.exports = router;