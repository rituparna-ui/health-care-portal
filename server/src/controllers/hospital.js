const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const Hospital = require('./../models/hospital');
const errorHelper = require('./../utils/error');
const geoCode = require('./../utils/mygeocode');

const { approvalMail } = require('./../utils/mailer');

exports.request = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errorHelper('Validation Failed', 422, errors.array()));
  }
  const { name, email, phone, address, city, state, password } = req.body;

  try {
    const extHosp = await Hospital.findOne({ email });

    if (extHosp) {
      return next(
        errorHelper('Hospital with this email already exists', 409, [])
      );
    }

    const hash = await bcrypt.hash(password, 12);

    const hospital = await Hospital.create({
      name,
      email,
      phone,
      password: hash,
      address,
      city,
      state,
    });

    console.log(hospital);

    return res.status(201).json({
      message: 'Request sent successfully',
      status: 201,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.getRequests = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find({ approved: false }).select(
      'name email phone address city state'
    );

    return res.status(200).json({
      message: 'Hospital Addition requests',
      hospitals,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.approveRequest = async (req, res, next) => {
  try {
    const hospital = await Hospital.findOne({ _id: req.body.id });
    if (!hospital) {
      return next(errorHelper('Hospital not found', 404, []));
    }
    hospital.approved = true;
    hospital.location.type = 'Point';
    const coodrs = await geoCode(hospital.address);
    hospital.location.coordinates = [coodrs.longitude, coodrs.latitude];
    await hospital.save();
    approvalMail(hospital)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log('err sending');
      });
    return res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.disapproveRequest = async (req, res, next) => {
  try {
    const hospital = await Hospital.findOneAndDelete({ _id: req.body.id });
    if (!hospital) {
      return next(errorHelper('Hospital not found', 404, []));
    }
    return res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.resources = async (req, res, next) => {
  if (req.user.role == 'USER') {
    console.log(req.user.role);
    return next(errorHelper('Unauthorized', 401, []));
  }
  const { general, icu, oxy, ventilator } = req.body;
  if (general) {
    req.user.resources.general = general;
    await req.user.save();
  }
  if (icu) {
    req.user.resources.icu = icu;
    await req.user.save();
  }
  if (oxy) {
    req.user.resources.oxy = oxy;
    await req.user.save();
  }
  if (ventilator) {
    req.user.resources.ventilator = ventilator;
    await req.user.save();
  }
  return res.status(200).json({
    message: 'resources updated',
    newResources: req.user.resources,
  });
};
