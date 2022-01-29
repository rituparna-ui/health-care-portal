module.exports = (message, code, array) => {
  let errors = [];
  if (array) {
    errors = array;
  }
  const error = new Error(message);
  error.statusCode = code;
  error.errors = array;
  return error;
};
