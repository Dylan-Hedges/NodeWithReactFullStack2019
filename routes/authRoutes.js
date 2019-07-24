const passport = require('passport');

module.exports = (app) => {
  //Route to authenticate with Google landing page - specifies we want to authenticate with google and what info we want from the users account
  app.get( '/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //Route to get Google profile info  - puts user on hold, sends code to google, gets back user info
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  //Route to log user out
  app.get('/api/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
  });

  //Route to check current user logged in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
