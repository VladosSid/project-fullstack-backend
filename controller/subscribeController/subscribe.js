const { HttpError } = require('../../helpers');
const { User } = require('../../models/userSchema');
const { sendEmail } = require('../../helpers');

const addSubscribe = async (req, res) => {
  const { _id } = req.user;
  const { email: subscribed } = req.body;

  const resp = await User.findOne({ subscribed });

  if (resp) {
    throw HttpError(409, 'This email has already subscribed.');
  }

  const { username } = await User.findByIdAndUpdate(_id, { subscribed });

  const verifyEmail = {
    to: subscribed,
    subject: 'Subscribing success email',
    html: `<h2> ${username}, Thank You for Subscribing! </h2>`,
  };

  await sendEmail(verifyEmail);

  return res.json({
    code: 200,
    status: 'Success',
    message: 'Subscribing success',
  });
};

module.exports = addSubscribe;
