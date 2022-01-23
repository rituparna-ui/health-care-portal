const express = require('express');
const { postSearchHospital } = require('../controllers/search');
const router = express.Router();

router.post('/hospital', postSearchHospital);

module.exports = router;
