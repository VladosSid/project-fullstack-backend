const { ctrlWrapper } = require('../../helpers');

const getCategoryList = require('./getCategoryList');

const getMainPageRecipes = require('./getMainPageRecipes');
// const getSearchRecipes = require('./getSearchRecipes');


module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getMainPageRecipes: ctrlWrapper(getMainPageRecipes),
  // getSearchRecipes:ctrlWrapper(getSearchRecipes)
};
