const mongoose = require('mongoose');
const {Schema} = mongoose;

//Creates the userSchema - specifies the properties for DB entries in the collection
const userSchema = new Schema({
  googleId: String
});

//Creates a mongoose model called 'users' using the userSchema
mongoose.model('users', userSchema);
