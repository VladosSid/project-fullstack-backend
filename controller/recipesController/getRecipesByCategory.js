const { recipesByCategory } = require('../../service/recipesService');

const getRecipesByCategory = async (req, res) => {
  const data = await recipesByCategory(req);

  res.json({
    status: 'success',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getRecipesByCategory;
