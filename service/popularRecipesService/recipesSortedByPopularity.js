const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const recipesSortedByPopularity = async req => {
  const { query = 4 } = req.query;

  const allRecipes = await Recipe.find({},"_id title description imageUrl popularity");
  if (!allRecipes) {
    throw HttpError(404, 'Recipes not found');
  }
  return allRecipes
    .sort((a, b) => b.popularity.length - a.popularity.length)
    .slice(0, Number(query));
};

module.exports = recipesSortedByPopularity;
