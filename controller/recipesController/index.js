const { ctrlWrapper } = require('../../helpers');

const getCategoryList = require('./getCategoryList');

const getMainPageRecipes = require('./getMainPageRecipes');

const getRecipesByCategory = require('./getRecipesByCategory');

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getMainPageRecipes: ctrlWrapper(getMainPageRecipes),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
};
