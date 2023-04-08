const { addToShoppingList } = require('../../service/shoppingService');
const {
  countShoppingList,
} = require('../../middleware/modalMotivation/modalMotivation');

const addToShopping = async (req, res) => {
  await addToShoppingList(req);
  const message = await countShoppingList(req.user);
  const motivationMessage = message ?? null;
  res.json({
    status: 'success',
    code: 200,
    motivationMessage,
  });
};

module.exports = addToShopping;
