const { addToFavoriteList } = require('../../service/favoriteService');
const {
  countFavouriteRecipes,
} = require('../../middleware/modalMotivation/modalMotivation');

const addToFavorite = async (req, res) => {
  const message = await countFavouriteRecipes(req.user);
  const motivationMessage = message ?? null;
  await addToFavoriteList(req);
  res.json({
    status: 'success',
    code: 200,
    motivationMessage,
  });
};

module.exports = addToFavorite;
