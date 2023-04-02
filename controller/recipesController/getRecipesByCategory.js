const { recipesByCategory } = require('../../service/recipesService');

const getRecipesByCategory = async (req, res) => {
  
  const result = await recipesByCategory(req);

  res.json({
    status: 'success',
    code: 200,
    result: {
      data: result,
    },
  });
};

module.exports = getRecipesByCategory;
