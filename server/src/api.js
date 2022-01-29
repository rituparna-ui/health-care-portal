const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/auth');
const hospRoutes = require('./routes/hospital');

router.use('/auth', authRoutes);

router.use('/hospitals', hospRoutes);

module.exports = router;
