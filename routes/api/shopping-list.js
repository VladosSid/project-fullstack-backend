const express = require('express');
const router = express.Router();

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { validateBody } = require('../../middleware/common');

const {
  addToShopping,
  removeFromShopping,
  getFromShopping,
} = require('../../controller/shoppingController');
const {
  addShoppingShema,
  removeShoppingShema,
} = require('../../helpers/validations/');

router.patch(
  '/add',
  authorizationMiddleware,
  validateBody(addShoppingShema),
  addToShopping
);

router.patch(
  '/remove',
  authorizationMiddleware,
  validateBody(removeShoppingShema),
  removeFromShopping
);

router.get('/', authorizationMiddleware, getFromShopping);

module.exports = router;
