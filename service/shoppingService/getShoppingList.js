const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const getShoppingList = async req => {
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }
  const user = await User.findOne({ _id });
  if (user.shoppingList.length === 0) {
    throw HttpError(400, 'The shopping list is empty');
  }
  const newShoppingArray = user.shoppingList;

  return newShoppingArray;
};

module.exports = getShoppingList;
