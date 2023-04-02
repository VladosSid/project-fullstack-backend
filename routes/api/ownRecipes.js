const expres = require('express');

const { authorizationMiddleware } = require('../../middleware/authMiddleware');
const { uploadImgRecipe } = require('../../middleware/uploadMiddleware');
const {
  addRecipe,
  delRecipe,
  getRecipesByOwn,
} = require('../../controller/ownRecipesController');
// const { validateBody } = require('../../middleware/common');

const router = expres.Router();

router.post('/', authorizationMiddleware, uploadImgRecipe, addRecipe);
router.delete('/:id', authorizationMiddleware, delRecipe);
router.get('/', authorizationMiddleware, getRecipesByOwn);

module.exports = router;
