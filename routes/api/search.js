const express = require('express');

const { authorizationMiddleware } = require("../../middleware/authMiddleware")

const {validateBody} = require('../../middleware/common')

const searchSchema = require('../../helpers/validations/subscribeSchema')
const {getSearchRecipes} = require('../../controller/recipesController')


const router = express.Router();

// поставить прошарку
router.get('/', authorizationMiddleware,  getSearchRecipes);
//
//validateBody()

module.exports = router;
