const express = require('express');
const cors = require('cors');
const app = express();

const DB = require('./src/utils/db');
const api = require('./api');
const auth = require('./src/middlewares/auth');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

app.get('/test', auth, (req, res) => {
  return res.json({
    message: 'protected route',
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    data: err.data,
  });
});

DB()
  .then(() => {
    console.log('Db connected');
    return app.listen(PORT);
  })
  .then(() => {
    console.log('serving');
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });
