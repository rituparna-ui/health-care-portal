const axios = require('axios').default;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    price: 'send data',
  });
});

app.post('/predict', (req, res) => {
  axios
    .post('http://localhost:8000', {
      area: req.body.area,
    })
    .then((result) => {
      res.render('index', {
        price: result.data.answer,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.listen(3000);
