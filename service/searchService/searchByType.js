const { HttpError } = require('../../helpers');
const { Ingredient } = require('../../models/ingredientSchema');
const { Recipe } = require('../../models/recipeSchema');

const toNormalizedQuery = query => {
  const normalizeQuery = query.trim();
  const result = new RegExp('\\b' + normalizeQuery + '\\b', 'i');
  return result;
};

const searchByType = async ({ type, query, skip, limitForSearch: limit }) => {
  switch (type) {
    case 'ingredients':
      const normalizedQuery = toNormalizedQuery(query);

      const ingredientId = await Ingredient.findOne(
        { title: normalizedQuery },
        '_id'
      );

      if (!ingredientId) {
        throw HttpError(404, `Recipe with ingredient: ${query}  not found`);
      }
      const normalizeId = ingredientId._id.toString();

      const recipesArrByIngredients = await Recipe.find(
        {
          'ingredients.id': normalizeId,
        },
        '_id title imageUrl ingredients',
        {
          skip,
          limit,
        }
      );

      // console.log(recipesArrByIngredients.length);

      return recipesArrByIngredients;

    case 'title':
      const normalizedQueryForTitle = toNormalizedQuery(query);

      const totalItem = await Recipe.countDocuments({
        title: normalizedQueryForTitle,
      });

      const recipesArrByTitle = await Recipe.find(
        {
          title: normalizedQueryForTitle,
        },
        '_id title imageUrl ',
        {
          skip,
          limit,
        }
      );
      // console.log(recipesArrByTitle.length);
      const result = { totalItem, list: recipesArrByTitle };
      return result;

    default:
      throw HttpError(400, 'Invalid type case');
  }
};

module.exports = searchByType;
