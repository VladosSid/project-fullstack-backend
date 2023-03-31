const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const register = async (username, email, password) => {
    const userCheck = await User.findOne({email});
    if (userCheck) {
        throw HttpError(409, "Email in use");
    }

    const user = new User({
        username,
        email,
        password,
        avatarURL: "temp"
    });
    await user.save();  
}

module.exports = register;