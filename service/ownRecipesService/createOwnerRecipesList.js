const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const createOwnerRecipesList = async req => {
  const { _id: owner } = req.user;
  const validateLimit = 4;

  const recipes = await Recipe.find(
    { owner },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  ).limit(validateLimit);

  if (recipes.length === 0) {
    throw HttpError(400, 'The recipe list is empty');
  }
  return recipes;
};

module.exports = createOwnerRecipesList;
