const Joi = require('joi');
const { HttpError } = require('../../helpers/HttpError');

const credentialsCheckMiddleware = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        next(HttpError(400, "Bad Request"));
    }
}

module.exports = credentialsCheckMiddleware;