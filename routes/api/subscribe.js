const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');

const { validateBody } = require('../../middleware/common');

const subscribeSchema = require('../../helpers/validations/subscribeSchema');

const { addSubscribe } = require('../../controller/subscribeController');

const router = express.Router();

router.post(
  '/',
  authorizationMiddleware,
  validateBody(subscribeSchema),
  addSubscribe
);

module.exports = router;
