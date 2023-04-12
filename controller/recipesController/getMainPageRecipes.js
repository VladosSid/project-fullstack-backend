const { mainPage } = require('../../service/recipesService');

const getMainPageRecipes = async (req, res) => {
  const data = await mainPage(req);

  res.json({
    status: 'success',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getMainPageRecipes;
