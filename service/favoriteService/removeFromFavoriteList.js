const { User } = require('../../models/userSchema');
const { Recipe } = require('../../models/recipeSchema');
const { HttpError, pagination } = require('../../helpers');

const removeFromFavoriteList = async req => {
  const { recipe: removeRecipe } = req.body;
  const { _id } = req.user;
  const { page = 1 } = req.query;
  const limit = 4;
  const skip = pagination(page, limit);

  if (!_id) {
    throw HttpError(404, 'User not found');
  }

  const user = await User.findOne({ _id });

  if (!user.favorites.includes(removeRecipe)) {
    throw HttpError(
      400,
      'The recipe is not listed, so it does not need to be deleted'
    );
  }
  const newFavoriteList = await User.findByIdAndUpdate(
    _id,
    {
      $pull: { favorites: removeRecipe },
    },
    { new: true }
  );
  const totalItem = newFavoriteList.favorites.length;

  const newRecipesArray = await Recipe.find(
    { _id: { $in: newFavoriteList.favorites } },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  )
    .skip(skip)
    .limit(limit);

  const result = { totalItem, list: newRecipesArray };

  return result;
};

module.exports = removeFromFavoriteList;
