const express = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { uploadImgRecipe } = require('../../middleware/uploadMiddleware');
const { validateBody } = require('../../middleware/common');
const {
  addRecipe,
  delRecipe,
  getRecipesByOwn,
} = require('../../controller/ownRecipesController');
const { addRecipeSchema } = require('../../helpers/validations/');

const router = express.Router();

router.post(
  '/',
  authorizationMiddleware,
  uploadImgRecipe,
  validateBody(addRecipeSchema),
  addRecipe
);
router.delete('/:id', authorizationMiddleware, delRecipe);
router.get('/', authorizationMiddleware, getRecipesByOwn);

module.exports = router;
