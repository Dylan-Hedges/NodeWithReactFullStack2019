const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//Must come before Passport.js as the model needs to be defined first
require('./models/User');
//Must come after User.js as model can only be called after it is defined
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

//Passes in Express to auth routes - Calls the arrow function in authRoutes.js passes in app
require('./routes/authRoutes')(app);

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
