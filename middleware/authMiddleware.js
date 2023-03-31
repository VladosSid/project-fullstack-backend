const jwt = require('jsonwebtoken');
require('dotenv').config();
const Joi = require('joi');

const { AuthorizationError, ValidationError } = require('../helpers/errors');
const { User } = require('../db/usersModel');


const authMiddleware = async (req, res, next) => {
    // eslint-disable-next-line dot-notation
    const [, token] = req.headers["authorization"].split(" ");

    if (!token) {
        next(new AuthorizationError("Not authorized"));
    }

    try {
        const user = jwt.decode(token, process.env.JWT_SECRET);
        const checkedUser = await User.findById(user._id);

        if (!checkedUser) {
            next(new AuthorizationError("Not authorized"));
        }

        if (checkedUser.token !== token) {
            next(new AuthorizationError("Not authorized"));
        }

        req.user = user;
        next();
    } catch (err) {
        next(new AuthorizationError("Not authorized"));
    }
}

const credentialsCheckMiddleware = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        next(new ValidationError(err.details[0].message));
    }
}

const verifyEmailCheckMiddleware = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required()
    });

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        next(new ValidationError(err.details[0].message));
    }
}

module.exports = {
    authMiddleware,
    credentialsCheckMiddleware,
    verifyEmailCheckMiddleware
}