const { createRecipe } = require('../../service/ownRecipesService');

const addRecipe = async (req, res) => {
  const result = await createRecipe(req);
  res.json({
    status: 'created',
    code: 201,
    result,
  });
};

module.exports = addRecipe;
