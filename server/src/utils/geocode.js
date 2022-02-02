const key = 'QW4cfkO7iasbJlNMPxBKU0Tv8rht3h9K';
// console.log(result.data.results[0].locations[0].latLng)

const axios = require('axios').default;

module.exports = (address) => {
  const encoded = address.replace(/ /g, '+').trim();
  const promise = new Promise((resolve, reject) => {
    axios
      .get('http://www.mapquestapi.com/geocoding/v1/address', {
        params: {
          key,
          location: encoded,
        },
      })
      .then((result) => {
        resolve(result.data.results[0].locations[0].latLng);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
};
