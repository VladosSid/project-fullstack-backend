const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');

const {
  getIngredientsList,
} = require('../../controller/ingredientsController');

const router = express.Router();

router.get('/list', authorizationMiddleware, getIngredientsList);

module.exports = router;
