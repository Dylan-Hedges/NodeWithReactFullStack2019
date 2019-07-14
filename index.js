const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//Must come before Passport.js as the model needs to be defined first
require('./models/user');
//Must come after User.js as model can only be called after it is defined
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

//Enables cookes in our App (using Express) - sets time it lasts (milliseconds) & an encryption key (a random string used to encrypt the cookie)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//Tells passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());

//Passes in Express to auth routes - Calls the arrow function in authRoutes.js passes in app
require('./routes/authRoutes')(app);

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
