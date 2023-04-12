const { getShoppingList } = require('../../service/shoppingService');

const getFromShopping = async (req, res) => {
  const result = await getShoppingList(req);
  const list = await result[0].shoppingList;
  res.json({
    status: 'success',
    code: 200,
    data: list,
  });
};

module.exports = getFromShopping;
