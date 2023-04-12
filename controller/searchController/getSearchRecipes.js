const { HttpError } = require('../../helpers');
const { searchByType } = require('../../service/searchService');

const getSearchRecipes = async (req, res) => {
  const { type, query, page = 1, limit = 100 } = req.query;

  const pageForSearch = Number(page);
  const limitForSearch = Number(limit);

  if (!query) {
    throw HttpError(400, 'invalid request');
  }

  if (!pageForSearch) {
    throw HttpError(400, 'Invalid page params');
  }

  if (!limitForSearch) {
    throw HttpError(400, 'Invalid limit params');
  }

  const skip = (pageForSearch - 1) * limitForSearch;

  const data = await searchByType({ type, query, skip, limitForSearch });

  res.json({
    status: 'success',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getSearchRecipes;
