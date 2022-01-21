const { PASSWORD_LENGTH, NAME_LENGTH } = require('./constants');

module.exports = {
  VALID_EMAIL: 'Please enter a valid email',
  PASSWORD_LEN: `Password must be of at least ${PASSWORD_LENGTH} characters`,
  VALID_NAME: 'Please enter a valid name',
  NAME_LEN: `Your name must be at least ${NAME_LENGTH} characters long`,
  PASSWORD_MATCH: 'Passwords dont match',
  EMAIL_EXISTS: 'Email already exists, Try logging in',
  SIGNUP: 'User signed up successfully',
  USER_404: 'User not found, Signup',
  INVALID_PASSWORD: 'Invalid Credential, Email or Password doesnt match',
  LOGIN_SUCCESS: 'Login Successful',
  ACCOUNT_NOT_VERIFIED: 'Account Not Verified',
};
