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
    //Checks to see if user is already in the DB
    User.findOne({ googleId: profile.id})
      .then((existingUser)=>{
        if(existingUser){
          //User exists in the DB - end the callback
          done(null, exisitingUser);
        }else{
          //User doesnt exist in DB - Create a new record in the MongoDB (model instance), user - this is a new model instance returned after saving to the DB
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
          }
      });
    }
  )
);
