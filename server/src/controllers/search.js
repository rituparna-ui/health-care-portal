const Hospital = require('./../models/hospital');
const geoCode = require('../utils/mygeocode');

const getDistance = (lat1, lat2, lon1, lon2) => {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));
  let r = 6371;
  return c * r;
};

exports.postSearchHospital = async (req, res, next) => {
  const { resource, qty, location } = req.body;
  console.log(location);

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
    });

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

    return res.status(200).json({
      message: 'Showing results for hospitals within 200kms',
      hospitals,
    });
  } catch (error) {
    return next(error);
  }
};
