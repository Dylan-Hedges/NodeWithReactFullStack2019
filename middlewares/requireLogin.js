module.exports = (req, res, next) => {
  //If there is no req.user (doesnt exist) - exit the chain and send a status of 401 + error message
  if (!req.user){
    return res.status(401).send({error: 'You must be logged in'});
  }
  //Proceed to the next part of the chain
  next();
};
