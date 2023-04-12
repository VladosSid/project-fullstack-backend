const { ctrlWrapper } = require('../../helpers');

const addToShopping = require('./addToShopping');
const removeFromShopping = require('./removeFromShopping');
const getFromShopping = require('./getFromShopping');

module.exports = {
  addToShopping: ctrlWrapper(addToShopping),
  removeFromShopping: ctrlWrapper(removeFromShopping),
  getFromShopping: ctrlWrapper(getFromShopping),
};
