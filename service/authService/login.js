const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../schemas/userSchema');
const { HttpError } = require('../../helpers');
require('dotenv').config();

const login = async (email, password) => {
    const user = await User.findOne({email});
    if (!user) {
        throw new HttpError(401, "Email or password is wrong");
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        throw new HttpError(401, "Email or password is wrong");
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.SECRET_KEY);

    const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $set: { token } }
    )

    return { token, updatedUser };
}

module.exports = login;