const { ctrlWrapper } = require('../../helpers');

const getCategoryList = require('./getCategoryList');

const getMainPageRecipes = require('./getMainPageRecipes');
// const getSearchRecipes = require('./getSearchRecipes');


const getRecipesByCategory = require('./getRecipesByCategory');

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getMainPageRecipes: ctrlWrapper(getMainPageRecipes),

  // getSearchRecipes:ctrlWrapper(getSearchRecipes)

  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),

};
