const express = require('express');
const router = express.Router();

const authRoutes = require('./src/routes/auth');

router.use('/auth', authRoutes);

router.use('/search', searchRoutes);

module.exports = router;
