const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require ('./config/keys');

const app = express();

//passport.use() tells app you want to authenticate with a strategy; (new GoogleStrategy()) specifies you want to use Google Passport Strategy (creates new isntance)
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

//authenticate with google route - specifies we want to authenticate with google and what info we want from the users account
app.get( '/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//callback route - puts user on hold, sends code to google, gets back user info
app.get('/auth/google/callback', passport.authenticate('google'));

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
