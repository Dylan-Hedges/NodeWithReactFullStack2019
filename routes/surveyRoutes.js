const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//Imports the survey model class
const Survey = mongoose.model('surveys');

module.exports = (app) => {
  //Route handler to create a new survey & send to recipients
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) =>{
    const {title, subject, body, recipients} = req.body;
    //Creates a new instance of the Survey
    const survey = new Survey({
      //Survey title
      title: title,
      //Email subject
      subject: subject,
      //Email body
      body: body,
      //Recipients List - Mongoose automatically creates sub document collection -Takes string of email addres and splits it into an array of strings, maps over each element and turns it into an array of objects
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      //Points at the user who owns the survey - this is the id genreated by Mongo
      _user: req.user.id,
      //Records when survey is sent
      dateSent: Date.now()
    })
  });
};
