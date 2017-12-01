module.exports = (router, passport) => {

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

  router.get('/twitter/login', passport.authenticate('twitter'));

  router.get('/twitter/auth/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/');
    });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
