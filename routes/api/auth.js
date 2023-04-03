const express = require('express')
const router = express.Router()

const { 
    authorizationMiddleware,
 } = require('../../middleware/authMiddleware');
const {
    uploadAvatar
} = require('../../middleware/uploadMiddleware');
const {
    validateBody
} = require('../../middleware/common');
const {
    registerSchema,
    loginSchema
} = require('../../helpers/validations');
const {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
    updateUserController
} = require('../../controller/authController');

router.post('/signup', validateBody(registerSchema), registrationController);
router.post('/login', validateBody(loginSchema), loginController);
router.get('/current', authorizationMiddleware, checkCurrentUserController);
router.get('/logout', authorizationMiddleware, logoutController);
router.patch('/update', authorizationMiddleware, uploadAvatar, updateUserController)

module.exports = { authRouter: router };