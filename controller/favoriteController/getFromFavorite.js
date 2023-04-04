const { getFavoriteList } = require('../../service/favoriteService');

const getFromFavorite = async (req, res) => {
  const favList = await getFavoriteList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: favList,
    },
  });
};

module.exports = getFromFavorite;
