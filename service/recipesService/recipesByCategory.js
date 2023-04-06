const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const recipesByCategory = async req => {
  const { category } = req.params;
  const regex = new RegExp(`^${category}$`, 'i');

  const result = await Recipe.find({ category: regex },"_id title imageUrl").limit(8);

  if (!result) {
    throw HttpError(404, 'Recipes or category not found');
  }
  return result;
};

module.exports = recipesByCategory;
