const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rituw1610@gmail.com',
    pass: process.env.A_MAIL_PWD,
  },
});

const OTPmail = (email, OTP, id) => {
  const promise = new Promise((res, rej) => {
    transporter.sendMail(
      {
        from: '"PHC-GEHC" rituw1610@gmail.com',
        to: email,
        subject: 'Verify your sign up',
        html: `<h3>Below is your one time password:</h3><h2>${OTP}</h2>Or click on the link to <strong><a href="http://localhost:5000/auth/verify/${id}?otp=${OTP}">Verify Account</a><strong><br/>This OTP and verification link is valid for 1 hour<br/><br/>Team PHC-GEHC`,
      },
      (e) => {
        if (e) {
          rej(e);
        } else {
          res('OTP mail sent');
        }
      }
    );
  });
  return promise;
};

const approvalMail = (hospital) => {
  const promise = new Promise((res, rej) => {
    transporter.sendMail(
      {
        from: '"PHC-GEHC" rituw1610@gmail.com',
        to: hospital.email,
        subject: 'Approval Status',
        html: `Your request for hospital registration for ${hospital.name.toUpperCase()} has been approved.Use your email id ( ${hospital.email.toLowerCase()} ) to login to our website<br/>Feel free to contact our support team for an further assistance<br/>Team PHC-GEHC`,
      },
      (e) => {
        if (e) {
          rej(e);
        } else {
          res('approval mail sent');
        }
      }
    );
  });
  return promise;
};

module.exports = { OTPmail, approvalMail };
