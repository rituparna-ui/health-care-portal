const Hospital = require('./../models/hospital');
const geoCode = require('../utils/mygeocode');
const geolib = require('geolib');

exports.postSearchHospital = async (req, res, next) => {
  const { location } = req.body;

  try {
    const coordinates = await geoCode(location);
    console.log(coordinates)
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

    return res.status(200).json({
      message: 'Showing results for hospitals within 200kms',
      hospitals: array,
    });
  } catch (error) {
    console.log(error)
    return next(error);
  }
};
