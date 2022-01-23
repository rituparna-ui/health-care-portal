const mongoose = require('mongoose');

const Hospital = require('./geo');

mongoose
  .connect('mongodb://127.0.0.1:27017/phc')
  .then(async () => {
    const hospital = await Hospital.create({
      name: 'Hospital IIIT2',
      address: 'hue hue lmao ded',
      location: {
        type: 'Point',
        coordinates: [91.5, 26.0],
      },
    });
    console.log(hospital);
    // const hospitals = await Hospital.find({
    //   location: {
    //     $near: {
    //       $maxDistance: 1,
    //       $geometry: {
    //         type: 'Point',
    //         coordinates: [12, 21],
    //       },
    //     },
    //   },
    // });
    // console.log(hospitals);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
