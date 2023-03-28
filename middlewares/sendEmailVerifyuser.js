const nodemailer = require("nodemailer");

require("dotenv").config();

const EMAIL_NODEMAILER = process.env.EMAIL_NODEMAILER;
const EMAIL_PASSWORD_NODEMAILER = process.env.EMAIL_PASSWORD_NODEMAILER;
const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_NODEMAILER,
    pass: EMAIL_PASSWORD_NODEMAILER,
  },
};
const transporter = nodemailer.createTransport(config);

function sendEmailVerifi(emailuser, verificationToken) {
  const emailOptions = {
    from: EMAIL_NODEMAILER,
    to: emailuser,
    subject: "Verifycation email",
    text: `Для завершення реєстрації потрібно підтвердити пошту. Для цього перейдіть за посиланням http://localhost:3000/api/auth/verify/${verificationToken}`,
  };

  return transporter
    .sendMail(emailOptions)
    .then((info) => info)
    .catch((err) => err);
}

module.exports = sendEmailVerifi;
