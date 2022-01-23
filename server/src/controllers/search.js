const Hospital = require('./../models/hospital');

exports.postSearchHospital = async (req, res) => {
  const { long, lat, resource, quantity } = req.body;

  try {
    const hospitals = await Hospital.find({
      location: {
        $near: {
          $maxDistance: 200 * 1000,
          $geometry: {
            type: 'Point',
            coordinates: [long, lat],
          },
        },
      },
    });

    if ((hospitals.length = 0)) {
      const hospitals = await Hospital.find({
        location: {
          $near: {
            $maxDistance: 500 * 1000,
            $geometry: {
              type: 'Point',
              coordinates: [long, lat],
            },
          },
        },
      });
    }

    return res.status(200).json({
      hospitals,
    });
  } catch (error) {
    return next(error);
  }
};
