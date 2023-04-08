const { addToFavoriteList } = require('../../service/favoriteService');

const addToFavorite = async (req, res) => {
  await addToFavoriteList(req);
  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = addToFavorite;
