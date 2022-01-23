const express = require('express');
const { postSearchHospital } = require('../controllers/search');
const router = express.Router();

router.post('/hospitals', postSearchHospital);

module.exports = router;
