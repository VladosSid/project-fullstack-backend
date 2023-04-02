const { createOwnerRecipesList } = require('../../service/ownRecipesService');

const getRecipesByOwn = async (req, res) => {
  const result = await createOwnerRecipesList(req);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getRecipesByOwn;
