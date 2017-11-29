var express = require('express');
var router = express.Router();
const Pin = require('../models/Pin')

/* POST request. */
router.post('/add', function(req, res, next) {
  const { pinURL: url, pinDescription: description } = req.body;

  // TODO: check if we have a valid URL and description

  const newPin = new Pin({ url, description })
  newPin.save(err => {
    if (err) return next(err);
    res.location('/');
    res.redirect('/');
  })
});

module.exports = router;
