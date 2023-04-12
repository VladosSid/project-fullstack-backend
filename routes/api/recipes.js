const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { isValidId } = require('../../middleware/common');

const {
  getCategoryList,
  getMainPageRecipes,
  getRecipesByCategory,
  getRecipeById,
} = require('../../controller/recipesController');

const router = express.Router();

router.get('/category-list', authorizationMiddleware, getCategoryList);

router.get('/main-page', authorizationMiddleware, getMainPageRecipes);

router.get(
  '/category/:category',
  authorizationMiddleware,
  getRecipesByCategory
);

router.get('/:id', authorizationMiddleware, isValidId, getRecipeById);

module.exports = router;
