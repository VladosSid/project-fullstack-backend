const registerSchema = require('./registerSchema');
const loginSchema = require('./loginSchema');
const querySchema = require('./querySchema');
const subcsribeSchema = require('./subscribeSchema');
const addRecipeSchema = require('./addRecipeShema');
const favoriteShema = require('./favoriteShema');
const addShoppingShema = require('./addShoppingShema');
const removeShoppingShema = require('./removeShoppingShema');

module.exports = {
  registerSchema,
  loginSchema,
  querySchema,
  subcsribeSchema,
  addRecipeSchema,
  favoriteShema,
  addShoppingShema,
  removeShoppingShema,
};
