const geo = require('./../src/utils/mygeocode');

geo('bakliwal tutorials, old employment chowk, saat rasta, solapur')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
