const Joi = require('joi');

const addRecipeSchema = Joi.object({
  img: Joi.binary(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  instructions: Joi.string().required(),
  time: Joi.string().required(),
  ingredients: Joi.array().items({
    id: Joi.string().required(),
    measure: Joi.string().required(),
  }),
});

module.exports = addRecipeSchema;
