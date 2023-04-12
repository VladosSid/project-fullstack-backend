const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');

const { validateQuery } = require('../../middleware/searchMiddelware');

const { getSearchRecipes } = require('../../controller/searchController');

const router = express.Router();

// поставить прошарку
router.get('/', authorizationMiddleware, validateQuery, getSearchRecipes);
//
//validateBody()

module.exports = router;
