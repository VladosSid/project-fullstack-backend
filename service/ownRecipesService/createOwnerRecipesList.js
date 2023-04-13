const { Recipe } = require('../../models/recipeSchema');
const { pagination } = require('../../helpers');

const createOwnerRecipesList = async req => {
  const { _id: owner } = req.user;
  const { page = 1 } = req.query;
  const limit = 4;
  const skip = pagination(page, limit);

  const totalItem = await Recipe.countDocuments({ owner });

  const recipes = await Recipe.find(
    { owner },
    { _id: 1, title: 1, description: 1, imageUrl: 1, time: 1 }
  )
    .skip(skip)
    .limit(limit);

  const result = { totalItem, list: recipes };

  return result;
};

module.exports = createOwnerRecipesList;
