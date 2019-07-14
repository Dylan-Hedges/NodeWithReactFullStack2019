//Works out if app is is in prod or dev using NODE_ENV variable & gets relevant keys
if (process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');
}else{
  //Returns dev keys
  module.exports = require('./dev');
}
