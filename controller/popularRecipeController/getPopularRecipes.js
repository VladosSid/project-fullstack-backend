const {
  recipesSortedByPopularity,
} = require('../../service/popularRecipesService');

const getPopularRecipes = async (req, res) => {
  const data = await recipesSortedByPopularity(req);

  res.json({
    status: 'success',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getPopularRecipes;
