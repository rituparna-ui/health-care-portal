const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/auth');
const hospRoutes = require('./routes/hospital');
const machRoutes = require('./routes/ml');

router.use('/auth', authRoutes);

router.use('/hospitals', hospRoutes);

router.use('/ml', machRoutes);

module.exports = router;
