const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

//Specifies the amount to charge the user (takes in Stripe auth token)
module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits for $5',
      source: req.body.id
    });
    //Updates the user model (local) - adds 5 credits
    req.user.credits +=5;
    //Saves it to the DB
    const user = await req.user.save();
    //Sends updated user back to the browser
    res.send(user);
  });
};
