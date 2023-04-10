const { HttpError } = require('../../helpers');
const { Ingredient } = require('../../models/ingredientSchema');
const { Recipe } = require('../../models/recipeSchema');

const toNormalizedQuery = query => {
  const result = new RegExp('\\b' + query + '\\b', 'i');
  return result;
};

const getReciresByTitle = async ({ query, skip, limit }) => {
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

  const result = { totalItem, list: recipesArrByTitle };
  return result;
};

const getRecipesByIngredients = async ({ query, skip, limit }) => {
  const normalizedQueryByIngredients = toNormalizedQuery(query);

  const ingredientId = await Ingredient.findOne(
    { title: normalizedQueryByIngredients },
    '_id'
  );

  if (!ingredientId) {
    throw HttpError(404, `Recipe with ingredient: ${query}  not found`);
  }
  const normalizeId = ingredientId._id.toString();

  const totalItem = await Recipe.countDocuments({
    'ingredients.id': normalizeId,
  });

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

  const result = { totalItem, list: recipesArrByIngredients };

  return result;
};

const searchByType = async ({ type, query, skip, limitForSearch: limit }) => {
  switch (type) {
    case 'ingredients':
      const recipesArrByIngredients = await getRecipesByIngredients({
        query,
        skip,
        limit,
      });

      return recipesArrByIngredients;

    case 'title':
      const recipesArrByTitle = await getReciresByTitle({
        query,
        skip,
        limit,
      });

      return recipesArrByTitle;

    default:
      throw HttpError(400, 'Invalid type case');
  }
};

module.exports = searchByType;
