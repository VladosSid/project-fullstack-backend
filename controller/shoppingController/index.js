const { ctrlWrapper } = require('../../helpers');

const addToShopping = require('./addToShopping');
const removeFromShopping = require('./removeFromShopping');

module.exports = {
  addToShopping: ctrlWrapper(addToShopping),
  removeFromShopping: ctrlWrapper(removeFromShopping),
};
