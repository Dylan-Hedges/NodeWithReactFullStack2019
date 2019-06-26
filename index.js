const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
const app = express();

//Passes in Express to auth routes - Calls the arrow function in authRoutes.js passes in app
require('./routes/authRoutes')(app);

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
