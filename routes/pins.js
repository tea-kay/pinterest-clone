var express = require('express');
var router = express.Router();
const Pin = require('../models/Pin')

/* POST request. */
router.post('/add', function(req, res, next) {
  const { pinURL: url, pinDescription: description } = req.body;
  const userId = req.user._json.id_str;
  const userImg = req.user._json.profile_image_url;
  const newPin = new Pin({ user: userId, userImg, url, description })
  newPin.save(err => {
    if (err) return next(err);
    res.location('/').redirect('/');
  })
});

router.post('/delete/:id', function(req, res, next) {

  Pin.findByIdAndRemove(req.params.id, (err, res) => {
    if (err) return next(err);
  })
  res.status(200).location('/').redirect('/');

});
module.exports = router;
