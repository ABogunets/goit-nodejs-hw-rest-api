const nodemailer = require("nodemailer");
const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);
/*
const emailOptions = {
  to: "abogunets@gmail.com",
  subject: "Nodemailer test",
  text: "Hello, this is a Nodemailer test!",
};
*/

const sendEmail = async (emailOptions) => {
  const email = { ...emailOptions, from: UKR_NET_EMAIL };
  await transporter.sendMail(email);
  return true;
};

// transporter
//   .sendMail(emailOptions)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

module.exports = sendEmail;
