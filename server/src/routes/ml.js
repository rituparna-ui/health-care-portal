const axios = require('axios').default;
const express = require('express');
const router = express.Router();

const errorHelper = require('./../utils/error');

// /api/v1/ml/diabetes

router.post('/diabetes', (req, res, next) => {
  const {
    highBp,
    highCol,
    checkCol,
    BMI,
    smoker,
    stroke,
    phyAct,
    fruits,
    heavyAlcohol,
    genHlt,
    menHlt,
    phyHlt,
    diffWlk,
    gender,
    age,
  } = req.body;
  axios
    .post('http://localhost:8000/diabetes', {
      highBp,
      highCol,
      checkCol,
      BMI,
      smoker,
      stroke,
      phyAct,
      fruits,
      heavyAlcohol,
      genHlt,
      menHlt,
      phyHlt,
      diffWlk,
      gender,
      age,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

router.post('/pcos', (req, res, next) => {
  const {
    age,
    weight,
    height,
    BMI,
    pulseRate,
    respRate,
    cycle,
    cycleLength,
    hip,
    waist,
    WHR,
    weightGain,
    hairGrowth,
    skinDark,
    hairFall,
    pimple,
    fastfood,
    exercise,
  } = req.body;

  axios
    .post('http://localhost:8000/pcos', {
      age,
      weight,
      height,
      BMI,
      pulseRate,
      respRate,
      cycle,
      cycleLength,
      hip,
      waist,
      WHR,
      weightGain,
      hairGrowth,
      skinDark,
      hairFall,
      pimple,
      fastfood,
      exercise,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

router.post('/depression', (req, res, next) => {
  const { q3, q5, q10, q13, q16, q17, q21, q24, q26, q31, q34, q37, q38, q42 } =
    req.body;

  axios
    .post('http://localhost:8000/depression', {
      q3,
      q5,
      q10,
      q13,
      q16,
      q17,
      q21,
      q24,
      q26,
      q31,
      q34,
      q37,
      q38,
      q42,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

router.post('/disease', (req, res, next) => {
  //const { q3, q5, q10, q13, q16, q17, q21, q24, q26, q31, q34, q37, q38, q42 } =
  //req.body;
  const answerState = req.body;
  console.log('hello', answerState);

  axios
    .post('http://localhost:8000/disease', {
      answerState,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

router.post('/predict', (req, res, next) => {
  //const { q3, q5, q10, q13, q16, q17, q21, q24, q26, q31, q34, q37, q38, q42 } =
  //req.body;
  const answerState = req.body;
  console.log('hello', answerState);

  axios
    .post('http://localhost:8000/predict', {
      answerState,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
        
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

module.exports = router;
