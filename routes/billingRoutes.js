const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

//Specifies the amount to charge the user (takes in Stripe auth token)
module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits for $5',
      source: req.body.id
    });
    console.log(charge);
  });
};
