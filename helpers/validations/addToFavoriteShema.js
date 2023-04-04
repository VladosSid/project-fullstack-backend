const Joi = require('joi');

const addToFavoriteShema = Joi.object({
  recipe: Joi.string().required(),
});

module.exports = addToFavoriteShema;
