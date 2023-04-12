const Joi = require('joi');

const favoriteShema = Joi.object({
  recipe: Joi.string().required(),
});

module.exports = favoriteShema;
