const { login } = require('../../service/authService');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { token, updatedUser } = await login(email, password);

        res.status(200).json({
            code: 200,
            status: "success",
            user: {
                username: updatedUser.username,
                email,
                avatarURL: updatedUser.avatarURL,
                token,
            }
        })
    } catch (err) {
        res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    }
}

module.exports = loginController;