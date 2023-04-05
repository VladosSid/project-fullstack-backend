const Joi = require('joi');

const removeShoppingShema = Joi.object({
  shoppingListIng: Joi.string().required(),
});

module.exports = removeShoppingShema;
