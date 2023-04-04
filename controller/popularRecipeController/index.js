const { ctrlWrapper } = require('../../helpers');

const getPopularRecipes = require('./getPopularRecipes');

module.exports = {
  getPopularRecipes: ctrlWrapper(getPopularRecipes),
};
