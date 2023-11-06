'''
This is the authentication and authorization middleware.
It verifies who the user is and controls what the user can do.
'''
const jwt = require('jsonwebtoken');
module.exports.authMiddleware = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    // Check user role
    if (req.user.role === 'Cultivator' && (req.path === '/addStrain' || req.path === '/editStrain')) {
      next();
    } else if (req.user.role === 'Dispensary' && req.path === '/addStrainToInventory') {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};