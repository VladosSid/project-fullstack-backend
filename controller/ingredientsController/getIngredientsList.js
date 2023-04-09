const { ingredientsList } = require('../../service/ingredientsService');

const getIngredientsList = async (req, res) => {
  const data = await ingredientsList();
  res.json({ status: 'succes', code: 200, result: { data } });
};

module.exports = getIngredientsList;
