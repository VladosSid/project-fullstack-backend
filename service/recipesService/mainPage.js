const { Recipe } = require('../../models/recipeSchema');

const mainPage = async req => {
  const { query = 1 } = req.query;

  const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
  const recipes = await Recipe.find(
    { category: { $in: categories } },
    '_id category title imageUrl'
  );

  const breakfast = recipes
    .filter(i => i.category === 'Breakfast')
    .slice(0, Number(query));
  const miscellaneous = recipes
    .filter(i => i.category === 'Miscellaneous')
    .slice(0, Number(query));
  const chicken = recipes
    .filter(i => i.category === 'Chicken')
    .slice(0, Number(query));
  const dessert = recipes
    .filter(i => i.category === 'Dessert')
    .slice(0, Number(query));

  return [...breakfast, ...miscellaneous, ...chicken, ...dessert];
};

module.exports = mainPage;
