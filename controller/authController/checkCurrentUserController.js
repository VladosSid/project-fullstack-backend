const { checkCurrentUser } = require('../../service/authService');

const checkCurrentUserController = async (req, res) => {
    try {
        const { _id: userId } = req.user;
        const user = await checkCurrentUser(userId);
        res.status(200).json({
            code: 200,
            status: "Success",
            user
        })
    } catch (err) {
        res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    }
}

module.exports = checkCurrentUserController;