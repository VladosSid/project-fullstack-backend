const Joi = require('joi');

const addShoppingShema = Joi.object({
  ing: Joi.array().items({
    id: Joi.string().required(),
    measure: Joi.string().required(),
  }),
});

module.exports = addShoppingShema;
