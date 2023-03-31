const express = require('express');

const { authorizationMiddleware } = require("../../middleware/authMiddleware")

const {validateBody} = require('../../middleware/common')

const subscribeSchema = require('../../controller/subscribeController/subscribeSchema')
const {addSubscribe} = require('../../controller/subscribeController/subscribe')


const router = express.Router();

// поставить прошарку
router.get('/',  addSubscribe);
//

module.exports = router;

//authorizationMiddleware, validateBody(subscribeSchema),,
