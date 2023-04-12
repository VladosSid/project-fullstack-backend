const { createOwnerRecipesList } = require('../../service/ownRecipesService');

const getRecipesByOwn = async (req, res) => {
  const recipes = await createOwnerRecipesList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: recipes,
    },
  });
};

module.exports = getRecipesByOwn;
