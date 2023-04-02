const { Recipe } = require('../../models/recipeSchema');

const createRecipe = async req => {
  const { _id: owner } = req.user;
  const fileUrl = req.file?.path;
  const newRecipe = await Recipe.create({
    ...req.body,
    owner,
    imageUrl: fileUrl,
  });
  return newRecipe;
};

module.exports = createRecipe;
