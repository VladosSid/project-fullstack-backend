const { removeFromShoppingList } = require('../../service/shoppingService');

const removeFromShopping = async (req, res) => {
  await removeFromShoppingList(req);
  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = removeFromShopping;
