const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');

const { getCategoryList, getMainPageRecipes } = require('../../controller/recipesController');

const router = express.Router();

router.get('/category-list', authorizationMiddleware, getCategoryList);

router.get('/main-page', authorizationMiddleware, getMainPageRecipes)

module.exports = router;
