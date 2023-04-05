const { Ingredient } = require('../../models/ingredientSchema');
const { HttpError } = require('../../helpers');

const ingredientsList = async () => {
  const list = await Ingredient.find({}, '_id title');
  if (!list) {
    throw HttpError(404, 'Ingredients not found');
  }
  return list;
};

module.exports = ingredientsList;
