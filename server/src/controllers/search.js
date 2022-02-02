const Hospital = require('./../models/hospital');
const geoCode = require('../utils/mygeocode');
const geolib = require('geolib');

exports.postSearchHospital = async (req, res, next) => {
  const { location } = req.body;

  try {
    const coordinates = await geoCode(location);
    const hospitals = await Hospital.find({
      location: {
        $near: {
          $maxDistance: 200 * 1000,
          $geometry: {
            type: 'Point',
            coordinates: [coordinates.longitude, coordinates.latitude],
          },
        },
      },
    }).select('-password -approved -role');

<<<<<<< HEAD
    console.log('hello',hospitals)

    // const array = [];

    // for (let index = 0; index < hospitals.length; index++) {
    //   const hospital = hospitals[index];
    //   if (hospital.resources[resource.toLowerCase()] >= qty) {
    //     const distance = getDistance(
    //       coordinates.longitude,
    //       coordinates.latitude,
    //       hospital.location.coordinates[0],
    //       hospital.location.coordinates[1]
    //     );
    //     array.push({ ...hospital, distance });
    //   } else {
    //     const distance = getDistance(
    //       coordinates.latitude,
    //       hospital.location.coordinates[1],
    //       coordinates.longitude,
    //       hospital.location.coordinates[0]
    //     );
    //     if (hospital.resources[resource] > 0) {
    //       array.push({
    //         name: hospital.name,
    //         address: hospital.address,
    //         location: hospital.location,
    //         requested: resource,
    //         available: hospital.resources[resource],
    //         distance,
    //       });
    //     }
    //   }
    // }
=======
    const array = hospitals.map((hospital) => {
      return {
        ...hospital._doc,
        distance: geolib.getDistance(
          {
            longitude: hospital.location.coordinates[0],
            latitude: hospital.location.coordinates[1],
          },
          {
            longitude: coordinates.longitude,
            latitude: coordinates.latitude,
          }
        ),
      };
    });
>>>>>>> b05faf5001967e4773f6abe5c11bcf46b2cee0fa

    return res.status(200).json({
      message: 'Showing results for hospitals within 200kms',
      hospitals: array,
    });
  } catch (error) {
    return next(error);
  }
};
