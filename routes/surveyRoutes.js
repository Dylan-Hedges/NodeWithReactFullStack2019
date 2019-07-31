const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//Imports the survey model class
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
  //Route handler that displays text after clicking Yes or No
  app.get('/api/surveys/thanks', (req, res) =>{
    res.send('Thanks for voting');
  });
  //Route handler to create a new survey & send to recipients
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) =>{
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
    });
    //Creates a new instance of the mail object - passes in the survey (subject & recipients) data & the email template
    const mailer = new Mailer(survey, surveyTemplate(survey));
    //Error Handeling - Tries the below and returns error code if there is an issue
    try{
      //Sends the Mailer object to the sendgrid API (email provider)
      await mailer.send();
      //Saves the survey to the DB
      await survey.save();
      //Reduces user credits by 1
      req.user.credits -= 1;
      //Saves the user (overwrites the old one)
      const user = await req.user.save();
      //Send the updated user model to the browser so that the credits can update in header
      res.send(user);
    } catch(err){
      res.status(422).send(err);
    }
  });
};
