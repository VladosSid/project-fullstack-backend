const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const removeFromFavoriteList = async req => {
  const { recipe: removeRecipe } = req.body;
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }

  const user = await User.findOne({ _id });

  if (!user.favorites.includes(removeRecipe)) {
    throw HttpError(
      400,
      'The recipe is not listed, so it does not need to be deleted'
    );
  } else {
    const newFavoriteList = await User.findByIdAndUpdate(
      _id,
      {
        $pull: { favorites: removeRecipe },
      },
      { new: true }
    );

    return newFavoriteList;
  }
};

module.exports = removeFromFavoriteList;
