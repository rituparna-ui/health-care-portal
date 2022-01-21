const { body } = require('express-validator');
const express = require('express');

const User = require('./../models/user');

const {
  VALID_EMAIL,
  PASSWORD_LEN,
  VALID_NAME,
  NAME_LEN,
  PASSWORD_MATCH,
  EMAIL_EXISTS,
} = require('../configs/messages');
const { postSignup, postLogin, getVerify } = require('../controllers/auth');
const { PASSWORD_LENGTH, NAME_LENGTH } = require('../configs/constants');

const router = express.Router();

// ! /api/v1/users/signup
router.post(
  '/signup',
  [
    body('name')
      .trim()
      .isAlpha()
      .withMessage(VALID_NAME)
      .isLength({ min: NAME_LENGTH })
      .withMessage(NAME_LEN),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage(VALID_EMAIL)
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject(EMAIL_EXISTS);
          }
          return true;
        });
      }),
    body('password')
      .isLength({ min: PASSWORD_LENGTH })
      .withMessage(PASSWORD_LEN),
    body('confirmPassword').custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error(PASSWORD_MATCH);
      }
      return true;
    }),
  ],
  postSignup
);

router.post('/login', [body('email').trim().toLowerCase()], postLogin);

router.get('/verify/:id', getVerify);

module.exports = router;
