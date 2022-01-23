const jwt = require('jsonwebtoken');

const { JWT } = require('../configs/constants');
const { ACCOUNT_NOT_VERIFIED } = require('../configs/messages');
const User = require('./../models/user');

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    jwt.verify(req.token, JWT, async (err, authData) => {
      if (err) {
        res.status(403).json({
          message: 'JWT MALFORMED',
        });
      } else {
        const user = await User.findOne({ _id: authData.id });
        if (!user.isVerified) {
          const error = new Error(ACCOUNT_NOT_VERIFIED);
          error.statusCode = 401;
          return next(error);
        }
        req.user = user;
        next();
      }
    });
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
