const Joi = require('joi');
const { HttpError } = require('../../helpers');

const registerInfoCheckMiddleware = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
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

module.exports = registerInfoCheckMiddleware;