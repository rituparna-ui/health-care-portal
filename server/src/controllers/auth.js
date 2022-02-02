const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./../models/user');
const Hospital = require('./../models/hospital');
const errorHelper = require('./../utils/error');
const OTPGEN = require('./../utils/otp');
const mailer = require('./../utils/mailer');

exports.signupUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errorHelper('Validation Failed', 422, errors.array()));
  }
  try {
    const extUser = await User.findOne({ email: req.body.email });

    if (extUser) {
      return next(errorHelper('User with this email already exists', 409, []));
    }
    const { name, email, age, sex, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const otp = OTPGEN();
    const user = await User.create({
      name,
      email,
      age,
      sex,
      otp,
      password: hashedPassword,
    });

    mailer.OTPmail(user.email, otp, user._id);

    return res.status(200).json({
      message: 'Sign up successful, Please check your email to verify account',
      status: 201,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    const hospital = await Hospital.findOne({ email }).select('+password');
    if (!user && !hospital) {
      return next(errorHelper('User with given email does not exist', 404, []));
    }
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return next(errorHelper('Invalid Credentials', 403, []));
      }
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          role: user.role,
        },
        'supersecretjwtsecretkey'
      );
      return res.status(200).json({
        message: 'Login successful',
        status: 200,
        token,
      });
    }
    if (hospital) {
      const isMatch = await bcrypt.compare(password, hospital.password);
      if (!isMatch) {
        return next(errorHelper('Invalid Credentials', 403, []));
      }
      const token = jwt.sign(
        {
          email: hospital.email,
          id: hospital._id,
          role: hospital.role,
        },
        'supersecretjwtsecretkey'
      );
      return res.status(200).json({
        message: 'Login successful',
        status: 200,
        token,
      });
    }
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

// /api/v1/auth/verify/:id?otp=XXXXXX
exports.verify = async (req, res, next) => {
  const { id } = req.params;
  const { otp } = req.query;

  if (!otp) {
    return next(errorHelper('OTP Not Provided', 404, []));
  }
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return next(errorHelper('User not found', 404, []));
    }
    if (otp != user.otp) {
      return next(errorHelper('Invalid OTP', 403, []));
    }
    if (otp == user.otp) {
      user.verified = true;
      user.otp = null;
      await user.save();
      return res.status(200).json({
        message: 'User verified',
        status: 200,
      });
    }
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};
