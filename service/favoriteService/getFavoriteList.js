const { User } = require('../../models/userSchema');
const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const getFavoriteList = async req => {
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }
  const user = await User.findOne({ _id });
  if (user.favorites.length === 0) {
    throw HttpError(400, 'The recipe list is empty');
  }
  const favoritesList = user.favorites;
  const newRecipesArray = await Recipe.find(
    { _id: { $in: favoritesList } },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  ).limit(4);
  return newRecipesArray;
};

module.exports = getFavoriteList;
