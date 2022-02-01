const axios = require('axios').default;

module.exports = (address) => {
  const replaced = address.replace(/ /g, '+').trim();

  const promise = new Promise((res, rej) => {
    axios
      .get('https://google.com/maps/search/' + replaced)
      .then((result) => {
        const coords = result.data
          .split('https://www.google.com/maps/preview/place/')[1]
          .split('/')[1]
          .split(',');
        const latitude = coords[0].split('@')[1];
        const longitude = coords[1];
        res({
          latitude,
          longitude,
        });
      })
      .catch((err) => {
        rej({
          message: 'Could not fetch coordinates',
          address: 'Please enter valid address',
        });
      });
  });
  return promise;
};
