const { ctrlWrapper } = require('../../helpers');
const addToFavorite = require('./addToFavorite');
const getFromFavorite = require('./getFromFavorite');

module.exports = {
  addToFavorite: ctrlWrapper(addToFavorite),
  getFromFavorite: ctrlWrapper(getFromFavorite),
};
