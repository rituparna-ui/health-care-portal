const { OTPmail } = require('../src/utils/mailer');

OTPmail('rwarwatkar@gmail.com', 123, 'safd')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
