const { createRecipe } = require('../../service/ownRecipesService');

const addRecipe = async (req, res) => {
  await createRecipe(req);
  res.json({
    status: 'created',
    code: 201,
  });
};

module.exports = addRecipe;
