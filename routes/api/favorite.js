const express = require('express');
const router = express.Router();

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { validateBody } = require('../../middleware/common');

const { addToFavorite } = require('../../controller/favoriteController');
const { addToFavoriteShema } = require('../../helpers/validations/');

router.patch(
  '/',
  authorizationMiddleware,
  validateBody(addToFavoriteShema),
  addToFavorite
);

module.exports = router;
