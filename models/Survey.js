const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

//Survey schema used to the create the mongoose model class
const surveySchema = new Schema({
  //Title for the survey
  title: String,
  //Email properties
  body: String,
  subject: String,
  //Recipients its being sent to - we use sub-document collection which records if the user has already clicked - prevents spam
  recipients: [RecipientSchema],
  //Records if the user responded with yes or no
  yes: {type: Number, default: 0 },
  no: {type: Number, default: 0 },
  //Sets up relationship between the survey <-> user
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  //Records date send and last time someone responded - user can estimate when they will stop getting feedback
  dateSent: Date,
  lastResponded: Date
});

//Creates a surveys model class under the name 'surveys' and loads it into mongoose
mongoose.model('surveys', surveySchema);
