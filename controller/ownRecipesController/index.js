const { ctrlWrapper } = require('../../helpers');

const addRecipe = require('./addRecipe');
const delRecipe = require('./delRecipe');
const getRecipesByOwn = require('./getRecipesByOwn');

module.exports = {
  addRecipe: ctrlWrapper(addRecipe),
  delRecipe: ctrlWrapper(delRecipe),
  getRecipesByOwn: ctrlWrapper(getRecipesByOwn),
};
