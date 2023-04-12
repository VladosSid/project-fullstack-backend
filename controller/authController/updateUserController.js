const { updateUser } = require('../../service/authService');

const updateUserController = async (req, res) => {
    const { _id: userId } = req.user;
    const newData = {};

    if (Object.keys(req.body).length > 0) {
        const { username } = req.body;
        if (username) {
            newData.username = username;
        }
    }

    if (req.file) {
        const filePath = req.file.path;
        newData.avatarURL = filePath;
    }

    try {
        const user = await updateUser(userId, newData);
            
        return res.status(200).json({
            code: 200,
            status: "Success",
            user: {
                username: user.username,
                avatarURL: user.avatarURL
            }
        });

    } catch (err) {
        return res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    } 
}


module.exports = updateUserController;