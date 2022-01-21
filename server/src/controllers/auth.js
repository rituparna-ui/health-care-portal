const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./../models/user');
const {
  SIGNUP,
  USER_404,
  INVALID_PASSWORD,
  LOGIN_SUCCESS,
} = require('../configs/messages');
const generateOTP = require('../utils/generateOTP');
const { OTPmail } = require('../utils/mailer');
const { JWT } = require('../configs/constants');

exports.postSignup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error('Validation failed');
    err.statusCode = 422;
    err.data = errors.array();
    return next(err);
  }

  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const otp = generateOTP();

  try {
    const user = await User.create({
      name,
      email,
      otp,
      password: hash,
    });
    OTPmail(email, otp, user._id)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e.message);
      });
    return res.status(201).json({
      message: SIGNUP,
    });
  } catch (error) {
    next(error);
  }
};

exports.postLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error('Validation failed');
    err.statusCode = 422;
    err.data = errors.array();
    return next(err);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    const error = new Error(USER_404);
    error.statusCode = 404;
    return next(error);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error(INVALID_PASSWORD);
    error.statusCode = 401;
    return next(error);
  }

  const token = jwt.sign({ id: user._id }, JWT);

  return res.json({
    message: LOGIN_SUCCESS,
    token,
  });
};

exports.getVerify = async (req, res, next) => {
  const { id } = req.params;
  const otp = req.query.otp || req.body.otp;
  const user = await User.findById(id);
  if (!user) {
    const error = new Error(USER_404);
    error.statusCode = 404;
    return next(error);
  }
  if (user.otp === parseInt(otp)) {
    user.isVerified = true;
    user.otp = undefined;
    await user.save();
    return res.status(200).json({
      message: 'User Verified',
    });
  }
  const error = new Error('Unable to verify');
  error.statusCode = 500;
  return next(error);
};
