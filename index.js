const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.send({ hi: 'there'});
});

//Listen on the Heroku environment variable OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
