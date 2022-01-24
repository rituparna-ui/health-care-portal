const express = require('express');
const router = express.Router();

const authRoutes = require('./src/routes/auth');
const searchRoutes = require('./src/routes/search');

router.use('/auth', authRoutes);

router.use('/search', searchRoutes);

router.post('/hospitals', (req, res) => {
  console.log(req.body);
});

module.exports = router;
