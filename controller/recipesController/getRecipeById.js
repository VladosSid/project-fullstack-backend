const { recipeById } = require('../../service/recipesService');

const getRecipeById = async (req, res) => {
  const data = await recipeById(req);

  res.json({
    status: 'succsess',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getRecipeById;
