const getRandomCategories = () => {
  const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];
  const randomCategories = [];
  while (randomCategories.length < 4) {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    if (!randomCategories.includes(randomCategory)) {
      randomCategories.push(randomCategory);
    }
  }
  return randomCategories;
};
module.exports = getRandomCategories;
