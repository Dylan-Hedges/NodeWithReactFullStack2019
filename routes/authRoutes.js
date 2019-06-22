const passport = require('passport');

module.exports = (app) => {
  //Authenticate with Google landing page route - specifies we want to authenticate with google and what info we want from the users account
  app.get( '/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //Gets Google profile info route - puts user on hold, sends code to google, gets back user info
  app.get('/auth/google/callback', passport.authenticate('google'));
}
