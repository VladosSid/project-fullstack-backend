const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const recipeById = async req => {
  const { id } = req.params;

  const recipe = await Recipe.find({ _id: id });

  if (!recipe || recipe.length === 0) {
    throw HttpError(404, `Recipe with id: ${id}  not found`);
  }
  return recipe;
};

module.exports = recipeById;
