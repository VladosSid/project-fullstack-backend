const {
  countRegisterDays,
} = require('../../middleware/modalMotivation/modalMotivation');
const { login } = require('../../service/authService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, updatedUser } = await login(email, password);

    const result = await countRegisterDays(updatedUser);
    const motivationMessage = result ?? null;

    res.status(200).json({
      code: 200,
      status: 'success',
      user: {
        username: updatedUser.username,
        email,
        avatarURL: updatedUser.avatarURL,
        token,
      },
      motivationMessage,
    });
  } catch (err) {
    res.status(err.status).json({
      code: err.status,
      status: err.message,
    });
  }
};

module.exports = loginController;
