const { addToShoppingList } = require('../../service/shoppingService');

const addToShopping = async (req, res) => {
  const newList = await addToShoppingList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: newList,
    },
  });
};

module.exports = addToShopping;
