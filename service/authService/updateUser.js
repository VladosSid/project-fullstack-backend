const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const updateUser = async (userId, newData) => {
    const user = await User.findOneAndUpdate(
        {_id: userId },
        {$set: {
            ...newData
        }},
        {
            returnDocument: 'after',
            returnNewDocument: true
        })
        .select({__v: 0});

    if (!user) {
        throw HttpError(404, 'Not found');
    }

    return user;
}

module.exports = updateUser;