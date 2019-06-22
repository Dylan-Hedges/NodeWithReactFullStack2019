const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require ('../config/keys');

//Sets up passport - passport.use() tells app you want to authenticate with a strategy; (new GoogleStrategy()) specifies you want to use Google Passport Strategy (creates new isntance)
passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
