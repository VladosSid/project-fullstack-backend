const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const checkCurrentUser = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw HttpError(404, "User Not Found");
    }

    return user;
}

module.exports = checkCurrentUser;