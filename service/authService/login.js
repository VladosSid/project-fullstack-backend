const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');
require('dotenv').config();

const login = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) {
        throw HttpError(401, "Email or password is wrong");
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        throw HttpError(401, "Email or password is wrong");
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.SECRET_KEY, 
    { expiresIn: '2d' });

    const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $set: { token } }
    )

    return { token, updatedUser };
}

module.exports = login;