const express = require('express');
const router = express.Router();

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { validateBody } = require('../../middleware/common');

const {
  addToFavorite,
  getFromFavorite,
  removeFromFavorite,
} = require('../../controller/favoriteController');
const { favoriteShema } = require('../../helpers/validations/');

router.patch(
  '/add',
  authorizationMiddleware,
  validateBody(favoriteShema),
  addToFavorite
);

router.get('/', authorizationMiddleware, getFromFavorite);

router.patch(
  '/remove',
  authorizationMiddleware,
  validateBody(favoriteShema),
  removeFromFavorite
);

module.exports = router;
