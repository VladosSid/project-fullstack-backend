const Joi = require('joi');
const { HttpError } = require('../../helpers');

const loginInfoCheckMiddleware = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        next(HttpError(400, err.message));
    }
}

module.exports = loginInfoCheckMiddleware;