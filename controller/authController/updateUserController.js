const updateUser = require('../../service/authService');

const updateUserController = async (req, res) => {
    // if (Object.keys(req.body).length > 0) {
        // добавить проверку данных, которые приходят с фронта, перед отправкой в дб
    // }

    const { _id: userId } = req.user;
    const { username } = req.body;
    // это нужно проверить...)
    const filePath = req.file.path;

    try {
        const user = await updateUser(userId, username, filePath);
            
        return res.status(200).json(user);

    } catch (err) {
    return res.status(err.status).json(err.message);
    }

    
}


module.exports = {
    updateUserController
}