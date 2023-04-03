const { ctrlWrapper } = require('../../helpers');

const getSearchRecipes = require('./getSearchRecipes');

module.exports = {
  getSearchRecipes: ctrlWrapper(getSearchRecipes),
};
