const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const register = async (username, email, password) => {
    const userCheck = await User.findOne({email});
    if (userCheck) {
        throw HttpError(409, "Email in use");
    }

    const TEMP_AVATAR = "https://res.cloudinary.com/dzdi0fyvw/image/upload/v1680523142/avatars/642aabed33c045223f516bd0_user_avatar.png"

    const user = new User({
        username,
        email,
        password,
        avatarURL: TEMP_AVATAR
    });
    await user.save();  
}

module.exports = register;