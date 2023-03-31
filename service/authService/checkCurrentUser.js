const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const checkCurrentUser = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw HttpError(401, "Not Authorized");
    }

    return user;
}

module.exports = checkCurrentUser;