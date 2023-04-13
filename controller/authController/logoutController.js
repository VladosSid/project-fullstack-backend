const { logout } = require('../../service/authService');

const logoutController = async (req, res) => {
    try {
        const { _id: userId } = req.user;
        await logout(userId);
        res.status(204).json({
            code: 204,
            status: "No Content: Logout Success"
        });
    } catch (err) {
        res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    }
}

module.exports = logoutController;