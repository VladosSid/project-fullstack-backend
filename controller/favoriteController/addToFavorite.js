const { addToFavoriteList } = require('../../service/favoriteService');
const {
  countFavouriteRecipes,
} = require('../../middleware/modalMotivation/modalMotivation');

const addToFavorite = async (req, res) => {
  const totalItems = await addToFavoriteList(req);
  const motivationMessage = (await countFavouriteRecipes(totalItems)) ?? null;

  res.json({
    status: 'success',
    code: 200,
    motivationMessage,
  });
};

module.exports = addToFavorite;
