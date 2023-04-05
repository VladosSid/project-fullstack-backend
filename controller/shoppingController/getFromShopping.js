const { getShoppingList } = require('../../service/shoppingService');

const getFromShopping = async (req, res) => {
  const shopList = await getShoppingList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: shopList,
    },
  });
};

module.exports = getFromShopping;
