const { addToShoppingList } = require('../../service/shoppingService');
const {
  countShoppingList,
} = require('../../middleware/modalMotivation/modalMotivation');

const addToShopping = async (req, res) => {
  const totalItems = await addToShoppingList(req);
  const motivationMessage = (await countShoppingList(totalItems)) ?? null;

  res.json({
    status: 'success',
    code: 200,
    motivationMessage,
  });
};

module.exports = addToShopping;
