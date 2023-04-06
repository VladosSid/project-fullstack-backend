const { checkCurrentUser } = require('../../service/authService');

const checkCurrentUserController = async (req, res) => {
    // нужен миддлвар для проверки и получения айдишки
    try {
        const { _id: userId } = req.user;
        const user = await checkCurrentUser(userId);
        res.status(200).json({
            code: 200,
            status: "Success",
            user: {
                username: user.username,
                email: user.email,
                token: user.token,
                avatarURL: user.avatarURL
            }
        })
    } catch (err) {
        res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    }
}

module.exports = checkCurrentUserController;