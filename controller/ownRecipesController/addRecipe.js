const { createRecipe } = require('../../service/ownRecipesService');

const addRecipe = async (req, res) => {
  const result = await createRecipe(req);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = addRecipe;
