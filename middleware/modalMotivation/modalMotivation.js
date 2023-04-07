const { User } = require('../../models/userSchema');

const countRegisterDays = async (user, days = 2) => {
  try {
    const now = new Date();
    const diff = now.getTime() - user.createdAt.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffDays % days === 0) {
      const count = diffDays / days;
      return `Wow! You have been using the application for ${count} days!`;
    }
  } catch (error) {
    console.log(error);
  }
};

const countShoppingList = async ({ _id }) => {
  try {
    const { shoppingList } = await User.findById({ _id }, 'shoppingList');
    console.log(shoppingList.length);

    if (shoppingList.length === 0) {
      return 'Wow! You have created your first shopping list!';
    }
  } catch (error) {
    console.log(error);
  }
};
// const message = handleMotivation(user.createAt) ?? 'Sucscribing succes';

const countFavouriteRecipes = async ({ _id }, counter = 9) => {
  try {
    const { favorites } = await User.findById({ _id }, 'favorites');
    console.log(favorites.length);

    if (favorites.length === 0) {
      return 'Wow! You have added the first recipe to your favorites!';
    }

    if (favorites.length % 9 === 0) {
      const count = favorites.length / counter;
      return 'Wow! You have added 10 recipes to your favorites!';
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  countRegisterDays,
  countShoppingList,
  countFavouriteRecipes,
};
