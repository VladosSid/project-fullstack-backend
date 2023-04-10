const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');

const { getRandomCategories } = require('../../helpers/index');

const mainPage = async req => {
  const { query = 4 } = req.query;

  const categories = getRandomCategories();
  const data = [];
  for (const category of categories) {
    const recipes = await Recipe.find(
      { category },
      '_id category title imageUrl'
    ).limit(Number(query));
    if (!recipes) {
      throw HttpError(404, 'Categories not found');
    }
    data.push(...recipes);
  }
  return data;
};

module.exports = mainPage;
