const { removeFromShoppingList } = require('../../service/shoppingService');

const removeFromShopping = async (req, res) => {
  const newList = await removeFromShoppingList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: newList,
    },
  });
};

module.exports = removeFromShopping;
