const { User } = require('../../models/userSchema');
const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const addToFavoriteList = async req => {
  const { recipe: newFavoriteRecipe } = req.body;
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }
  const user = await User.findOne({ _id });

  await Recipe.findByIdAndUpdate(
    newFavoriteRecipe,
    {
      $addToSet: { popularity: _id },
    },
    { new: true }
  );

  if (user.favorites.includes(newFavoriteRecipe)) {
    throw HttpError(400, 'The recipe is already in the list');
  }
  const newFavorites = await User.findByIdAndUpdate(
    _id,
    {
      $push: { favorites: newFavoriteRecipe },
    },
    { new: true }
  );

  const totalItems = newFavorites.favorites.length;
  
  return totalItems;
};

module.exports = addToFavoriteList;
