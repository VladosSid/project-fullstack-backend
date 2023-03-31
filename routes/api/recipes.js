const express = require('express');

// const { authMiddleware } = require("../../middleware/authMiddleware")

const ctrl = require('../../controller/recipesController');

const router = express.Router();

// поставить прошарку
router.get('/category-list', ctrl.getCategoryList);
//

module.exports = router;
