const { Recipe } = require('../../models/recipeSchema');

const createRecipe = async req => {
  const { _id: owner } = req.user;
  const fileUrl = req.file?.path;
  await Recipe.create({
    ...req.body,
    owner,
    imageUrl: fileUrl,
  });
};

module.exports = createRecipe;
