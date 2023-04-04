const { addToFavoriteList } = require('../../service/favoriteService');

const addToFavorite = async (req, res) => {
  const newList = await addToFavoriteList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: newList,
    },
  });
};

module.exports = addToFavorite;
