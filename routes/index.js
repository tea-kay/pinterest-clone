var express = require('express');
var router = express.Router();
const Pin = require('../models/Pin')
const passport = require('passport');
var Strategy = require('passport-twitter').Strategy;

// twitter Oauth
passport.use(new Strategy({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK,
}, (token, tokenSecret, profile, callback) => {
  console.log('this is the profile', profile)
  return callback(null, profile);
}));

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser((obj, callback) => {
  callback(null, obj);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  Pin.find({}, (err, pins) => {
    if (err) return next(err);
    res.render('index', { title: 'Pinterest Clone', pins });
  })
});

router.get('/twitter/login', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
