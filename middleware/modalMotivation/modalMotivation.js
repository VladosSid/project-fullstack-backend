const countRegisterDays = async ({ createdAt }) => {
  console.log(createdAt);

  try {
    const now = new Date();
    const diff = now.getTime() - createdAt.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffDays % 5 === 0 && diffDays !== 0) {
      const count = diffDays / 5;
      return `You have been using the application for ${count} days!`;
    }
  } catch (error) {
    console.log(error);
  }
};

const countShoppingList = async totalIngred => {
  if (totalIngred === 1) {
    return 'You have created your first shopping list!';
  }
};

const countFavouriteRecipes = async totalFavorites => {
  if (totalFavorites === 1) {
    return 'You have added the first recipe to your favorites!';
  }

  if (totalFavorites === 9) {
    return 'You have added 10 recipes to your favorites!';
  }
};

module.exports = {
  countRegisterDays,
  countShoppingList,
  countFavouriteRecipes,
};
