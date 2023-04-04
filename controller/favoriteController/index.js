const { ctrlWrapper } = require('../../helpers');

const addToFavorite = require('./addToFavorite');
const getFromFavorite = require('./getFromFavorite');
const removeFromFavorite = require('./removeFromFavorite');

module.exports = {
  addToFavorite: ctrlWrapper(addToFavorite),
  getFromFavorite: ctrlWrapper(getFromFavorite),
  removeFromFavorite: ctrlWrapper(removeFromFavorite),
};
