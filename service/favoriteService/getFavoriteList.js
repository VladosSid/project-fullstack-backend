const { User } = require('../../models/userSchema');
const { Recipe } = require('../../models/recipeSchema');
const { HttpError, pagination } = require('../../helpers');

const getFavoriteList = async req => {
  const { _id } = req.user;
  const { page = 1 } = req.query;
  const limit = 4;
  const skip = pagination(page, limit);

  if (!_id) {
    throw HttpError(404, 'User not found');
  }
  const user = await User.findOne({ _id });

  const totalItem = user.favorites.length;

  const favoritesList = user.favorites;

  const newRecipesArray = await Recipe.find(
    { _id: { $in: favoritesList } },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  )
    .skip(skip)
    .limit(limit);

  const result = { totalItem, list: newRecipesArray };

  return result;
};

module.exports = getFavoriteList;
