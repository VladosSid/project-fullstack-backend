const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const recipesSortedByPopularity = async req => {
  const { query = 4 } = req.query;

  const allRecipes = await Recipe.aggregate([
    { $sort: { popularity: -1 } },
    { $project: { _id: 1, title: 1, description: 1, imageUrl: 1 } },
    { $limit: Number(query) },
  ]);
  if (!allRecipes || allRecipes.length === 0) {
    throw HttpError(404, 'Recipes not found');
  }
  return allRecipes;
};

module.exports = recipesSortedByPopularity;
