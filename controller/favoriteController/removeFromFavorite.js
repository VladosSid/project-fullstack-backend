const { removeFromFavoriteList } = require('../../service/favoriteService');

const removeFromFavorite = async (req, res) => {
  const newList = await removeFromFavoriteList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: newList,
    },
  });
};

module.exports = removeFromFavorite;
