const mongoose = require('mongoose');
const {Schema} = mongoose;

//Subdocument Collection - records if user has clicked a link, prevents duplicate responses
const recipientSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: true}
});

module.exports = recipientSchema;
