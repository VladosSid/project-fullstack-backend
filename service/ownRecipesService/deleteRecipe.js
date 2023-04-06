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
    throw HttpError(
      404,
      'This recipe is not available, so it does not need to be deleted'
    );
  }
  return result;
};

module.exports = deleteRecipe;
