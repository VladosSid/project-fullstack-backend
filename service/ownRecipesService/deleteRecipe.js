const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const deleteRecipe = async req => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Recipe.findOneAndDelete({
    id,
    owner,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
    }
    return result;
};

module.exports = deleteRecipe;
