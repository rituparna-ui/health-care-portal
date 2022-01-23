const geocode = require('./kek');

(async () => {
  const coords = await geocode('IIIT Guwahati, Bongora');
  console.log(coords);
})();
