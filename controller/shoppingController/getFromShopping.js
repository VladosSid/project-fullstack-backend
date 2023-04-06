const { getShoppingList } = require('../../service/shoppingService');

const getFromShopping = async (req, res) => {
  const result = await getShoppingList(req);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getFromShopping;
