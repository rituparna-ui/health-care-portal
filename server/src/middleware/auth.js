const jwt = require('jsonwebtoken');

const errorHelper = require('./../utils/error');
const User = require('./../models/user');
const Hospital = require('./../models/hospital');

module.exports = async (req, res, next) => {
 
  try {
    const token = req.headers.authorization.split(' ')[1];
    
    const decode = jwt.verify(token, 'supersecretjwtsecretkey');
    if (decode) {
      if (decode.role == 'USER') {
        const user = await User.findOne({ _id: decode.id });
        req.user = user;
        next();
      }
      if (decode.role == 'HOSPITAL') {
        const user = await Hospital.findOne({ _id: decode.id });
        req.user = user;
        next();
      }
    } else {
      return next(errorHelper('Invalid Token', 401, []));
    }
  } catch (error) {
    return next(errorHelper('Invalid Token', 401, []));
  }
};
