const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require ('../config/keys');

//Pulls  the 'user' model class from mongoose - used to create collections in MongoDB
const User = mongoose.model('users');

//Sets up passport - passport.use() tells app you want to authenticate with a strategy; (new GoogleStrategy()) specifies you want to use Google Passport Strategy (creates new isntance)
passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {
      //Creates a new record in the MongoDB (model instance)
      new User({ googleId: profile.id}).save();
    }
  )
);
