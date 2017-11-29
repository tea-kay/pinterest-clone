var express = require('express');
var router = express.Router();
const Pin = require('../models/Pin')

/* GET home page. */
router.get('/', function(req, res, next) {
  Pin.find({}, (err, pins) => {
    if (err) return next(err);
    console.log(pins)
    res.render('index', { title: 'Pinterest Clone', pins });
  })
});

module.exports = router;
