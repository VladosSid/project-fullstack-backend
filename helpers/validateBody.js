const Joi = require("joi");

async function validatePost(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });

  const validate = await schema.validate(data);

  return validate;
}

async function validatePut(data) {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
  });

  const validate = await schema.validate(data);

  return validate;
}

async function validateUser(email, password) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const validate = await schema.validate({ email, password });
  return validate;
}

module.exports = {
  validatePost,
  validatePut,
  validateUser,
};
