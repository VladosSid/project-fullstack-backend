// написати JOI схему для search

const { invalid } = require('joi');
const { HttpError } = require('../../helpers');
const { Recipe } = require('../../models/recipeSchema');
const searchByType = require('../../service/searchService/searchByType');

const getSearchRecipes = async (req, res) => {
  // const {_id: owner} = req.user;

  const { type, query, page = 1, limit = 12 } = req.query;

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

  // const result = await Recipe.find({}, "-createdAt -updatedAt", {skip, limit});
  res.json({
    status: 'success',
    code: 200,
    result: {
      data,
    },
  });
};

module.exports = getSearchRecipes;
