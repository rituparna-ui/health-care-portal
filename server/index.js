const cors = require('cors');
const path = require('path');
const express = require('express');

const DB = require('./src/utils/DB');
const apiRoutes = require('./src/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/adminass', express.static(path.join(__dirname, 'src', 'admin')));

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'admin', 'index.html'));
});

app.use('/api/v1', apiRoutes);

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'Not Found',
  });
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
    status: err.statusCode || 500,
    errors: err.errors,
  });
});

DB()
  .then(() => {
    console.log('db connected');
    return app.listen(PORT);
  })
  .then(() => {
    console.log('app started');
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(0);
  });
