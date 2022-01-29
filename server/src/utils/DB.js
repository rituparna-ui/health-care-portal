module.exports = () => {
  return require('mongoose').connect('mongodb://localhost:27017/phc');
};
