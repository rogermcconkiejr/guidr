const jwt = require('jsonwebtoken');
const secrets = require('../secrets');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token){
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken)=>{
      if(err){
        res.status(401).json({ you: 'are not authorized!' });
      } else {
        req.username = decodedToken.username; 
        req.id = decodedToken.id; //
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'No token provided.' })
  }
};