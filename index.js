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
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

//authenticate with google route - specifies we want to authenticate with google and what info we want from the users account
app.get( '/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
