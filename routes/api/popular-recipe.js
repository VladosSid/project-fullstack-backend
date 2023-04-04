const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');

const {
  getPopularRecipes,
} = require('../../controller/popularRecipeController');

const router = express.Router();

router.get('/', authorizationMiddleware, getPopularRecipes);

module.exports = router;
