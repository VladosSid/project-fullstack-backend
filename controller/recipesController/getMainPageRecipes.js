const { mainPage } = require('../../service/recipesService');

const getMainPageRecipes = async (req, res) => {
  const result = await mainPage(req);

  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getMainPageRecipes;
