var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'afnuazi@gmail.com',
    pass: 'irzy evzq efqs cvue'
  }
});

var mailOptions = {
  from: 'afnuazi@gmail.com',
  to: 'afnanavaniyedathil@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is test email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});