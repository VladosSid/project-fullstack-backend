const getCategoryList = async (req, res) => {
  const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  res.json({
    status: 'success',
    code: 200,
    result: {
      data: categories,
    },
  });
};

module.exports = getCategoryList;
