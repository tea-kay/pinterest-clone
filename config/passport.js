var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;

// twitter Oauth
passport.use(new Strategy({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: 'http://127.0.0.1:3000/twitter/auth/callback'
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
