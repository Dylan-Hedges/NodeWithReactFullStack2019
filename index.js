const express = require('express');
require('./services/passport');

const app = express();

//Passes in Express to auth routes - Calls the arrow function in authRoutes.js passes in app
require('./routes/authRoutes')(app);

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
