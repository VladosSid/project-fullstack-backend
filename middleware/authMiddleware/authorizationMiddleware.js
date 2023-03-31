const jwt = require('jsonwebtoken');

const { HttpError } = require('../../helpers');
const { User } = require('../../models/userSchema');

const authorizationMiddleware = async (req, res, next) => {
    // eslint-disable-next-line dot-notation
    const [, token] = req.headers["authorization"].split(" ");

    if (!token) {
        next(HttpError(401, "Not Authorized"));
    }

    try {
        const user = jwt.decode(token, process.env.JWT_SECRET);
        const checkedUser = await User.findById(user._id);

        if (!checkedUser) {
            next(HttpError(401, "Not Authorized"));
        }

        if (checkedUser.token !== token) {
            next(HttpError(401, "Not Authorized"));
        }

        req.user = user;
        next();
    } catch (err) {
        next(HttpError(401, "Not Authorized"));
    }
}

module.exports = authorizationMiddleware;