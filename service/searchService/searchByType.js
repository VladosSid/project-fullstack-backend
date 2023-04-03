//якщо приходить 2 слова?
// доборити пошук

const { HttpError } = require('../../helpers');
// const { Ingredient } = require('../../models/ingredientSchema');
const { Recipe } = require('../../models/recipeSchema');

const searchByType = async ({ type, query, skip, limitForSearch: limit }) => {
  function toNormalizedQuery(query) {
    const normalizeQuery = query.trim();
    const result = new RegExp('\\b' + normalizeQuery + '\\b', 'i');
    return result;
  }

  switch (type) {
    case 'ingredients':
      // const normalizedQueryforIngredients = toNormalizedQuery(query);
      // const ingredientId = await Ingredient.findOne(
      //   { title: normalizedQueryforIngredients },
      //   '_id'
      // );
      // if (!ingredientId) {
      //   throw HttpError(404, `Recipe with ingredient: ${query}  not found`);
      // }
      // // const normalizeId = ingredientId._id.toString();
      // // console.log(normalizeId);
      // const normalizeId = ingredientId._id.toString();

      // const recipesArrByIngredients = await Recipe.find({
      //   ingredients: { $elemMatch: { id: normalizeId } },
      // });

      // // const recipesArrByIngredients = await Recipe.findById({
      // //   ingredients: { id: normalizeId },
      // // });

      // console.log(recipesArrByIngredients);

      // return recipesArrByIngredients;
      return 'ingredients';

    case 'title':
      const normalizedQueryForTitle = toNormalizedQuery(query);
      const recipesArrByTitle = await Recipe.find({
        title: normalizedQueryForTitle,
      });
      return recipesArrByTitle;

    default:
      throw HttpError(400, 'Invalid type case');
  }
};

module.exports = searchByType;
