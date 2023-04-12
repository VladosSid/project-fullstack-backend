const { User } = require('../../models/userSchema');
const { HttpError } = require('../../helpers');

const removeFromShoppingList = async req => {
  const { shoppingListIng: removeIngredients } = req.body;
  const { _id } = req.user;

  if (!_id) {
    throw HttpError(404, 'User not found');
  }

  const user = await User.findOne({ _id });

  const isInList = user.shoppingList.find(
    obj => obj._id.toString() === removeIngredients
  );

  if (!isInList) {
    throw HttpError(
      400,
      'The ingredient is not listed, so it does not need to be deleted'
    );
  }
  await User.findByIdAndUpdate(
    _id,
    {
      $pull: { shoppingList: { _id: removeIngredients } },
    },
    { new: true }
  );
};

module.exports = removeFromShoppingList;
