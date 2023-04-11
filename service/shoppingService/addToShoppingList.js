const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const addToShoppingList = async req => {
  const { ing: newIngredients } = req.body;
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }

  const newShoppingList = await User.findByIdAndUpdate(
    _id,
    {
      $push: { shoppingList: newIngredients },
    },
    { new: true }
  );

  const totalItems = newShoppingList.shoppingList.length;

  return totalItems;
};

module.exports = addToShoppingList;
