const express = require('express');
const cors = require('cors');
const app = express();
const DB = require('./src/utils/db');
const api = require('./api');
const auth = require('./src/middlewares/auth');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send({
    msg: 'This has CORS enabled',
  });
});

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
// server.listen(PORT, () => console.log('server started'));

let io;

DB()
  .then(() => {
    console.log('Db connected');
    return app.listen(PORT);
  })
  .then((server) => {
    io = require('socket.io')(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    console.log('serving', PORT);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });

module.exports = io;
