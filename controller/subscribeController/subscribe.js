
const { ctrlWrapper, HttpError } = require('../../helpers');
const {User} = require("../../models/userSchema")
const {sendEmail} = require('../../helpers')

const addSubscribe = async (req, res) => {
const {_id} = res.user;
const {email} = res.body;

const resp = await User.findOne({email});

if(resp) {
    throw HttpError(409, "This email has already subscribed.")
}

const {username} = await User.findByIdAndUpdate(_id, {subscribed: email});

const verifyEmail = {
    to: email,
    subject: "Subscribing success email",
    html: `<h2> ${username}, Thank You for Subscribing! </h2>`,
  };

  await sendEmail(verifyEmail);


  return res.status(200).json('Subscribing success');
};

module.exports = {
  addSubscribe: ctrlWrapper(addSubscribe),
};
