const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const addToFavoriteList = async req => {
  const { recipe: newFavoriteRecipe } = req.body;
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }
  const user = await User.findOne({ _id });
  if (user.favorites.includes(newFavoriteRecipe)) {
    throw HttpError(400, 'The recipe is already in the list');
  } else {
    const newFavoriteList = await User.findByIdAndUpdate(
      _id,
      {
        $push: { favorites: newFavoriteRecipe },
      },
      { new: true }
    );

    return newFavoriteList;
  }
};

module.exports = addToFavoriteList;
