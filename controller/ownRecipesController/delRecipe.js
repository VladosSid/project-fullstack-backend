const { deleteRecipe } = require('../../service/ownRecipesService');

const delRecipe = async (req, res) => {
  const result = await deleteRecipe(req);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = delRecipe;
