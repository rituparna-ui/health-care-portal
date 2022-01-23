const express = require('express');
const router = express.Router();

const authRoutes = require('./src/routes/auth');
const searchRoutes = require('./src/routes/search');
const videoRoutes = require('./src/routes/video.js')
router.use('/auth', authRoutes);

router.use('/search', searchRoutes);


module.exports = router;
