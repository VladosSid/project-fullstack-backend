const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const register = async (login, email, password) => {
    const userCheck = await User.findOne({email});
    if (userCheck) {
        throw new HttpError(409, "Email in use");
    }

    const user = new User({
        login,
        email,
        password,
        avatarURL: "temp"
    });
    await user.save();  
}

module.exports = register;