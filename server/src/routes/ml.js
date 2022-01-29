const axios = require('axios').default;
const express = require('express');
const router = express.Router();

const errorHelper = require('./../utils/error');

router.post('/diabetes', (req, res) => {
  const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p } = req.body;
  axios
    .post('http://localhost:8000/diabetes', {
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
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
