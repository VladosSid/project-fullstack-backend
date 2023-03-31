const { User } = require('../schemas/userSchema');
const { HttpError } = require('../../helpers');

const logout = async (userId) => {
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: { token: null } }
    )

    if (!user) {
        throw new HttpError(401, "Not Authorized");
    }

    return user;
}

module.exports = logout;