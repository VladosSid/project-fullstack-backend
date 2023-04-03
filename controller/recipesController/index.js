const { ctrlWrapper } = require('../../helpers');

const getCategoryList = require('./getCategoryList');

const getMainPageRecipes = require('./getMainPageRecipes');

const getRecipesByCategory = require('./getRecipesByCategory');

const getRecipeById = require('./getRecipeById');

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getMainPageRecipes: ctrlWrapper(getMainPageRecipes),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipeById: ctrlWrapper(getRecipeById),
};
