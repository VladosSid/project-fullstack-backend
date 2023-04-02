const { Recipe } = require('../../models/recipeSchema');

const createOwnerRecipesList = async req => {
  const { _id: owner } = req.user;
  const validateLimit = 4;
  const recipes = await Recipe.find({ owner }).limit(validateLimit);
  return recipes;
};

module.exports = createOwnerRecipesList;
