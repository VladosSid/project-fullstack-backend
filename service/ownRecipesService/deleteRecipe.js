const { Recipe } = require('../../models/recipeSchema');
const { HttpError, pagination } = require('../../helpers');

const deleteRecipe = async req => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const { page = 1 } = req.query;
  const limit = 4;
  const skip = pagination(page, limit);

  const removedRecipe = await Recipe.findOneAndDelete({
    id,
    owner,
  });

  if (!removedRecipe) {
    throw new HttpError(400, 'Not found');
  }

  const totalItem = await Recipe.countDocuments({ owner });

  if (totalItem === 0) {
    throw HttpError(400, 'There are no own recipes');
  }

  const recipes = await Recipe.find(
    { owner },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  )
    .skip(skip)
    .limit(limit);

  const result = { totalItem, list: recipes };

  return result;
};

module.exports = deleteRecipe;
