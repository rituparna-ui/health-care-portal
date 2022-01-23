const mongoose = require('mongoose');

const Hospital = require('./geo');

mongoose
  .connect('mongodb://127.0.0.1:27017/phc')
  .then(async () => {
    const hospitals = await Hospital.find({
      location: {
        $near: {
          $maxDistance: 1,
          $geometry: {
            type: 'Point',
            coordinates: [12, 21],
          },
        },
      },
    });
    console.log(hospitals);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
