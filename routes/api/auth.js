const express = require('express')
const router = express.Router()

const { 
    authorizationMiddleware,
    registerInfoCheckMiddleware,
    loginInfoCheckMiddleware,
 } = require('../../middleware/authMiddleware');
const {
    uploadAvatar
} = require('../../middleware/uploadMiddleware');
const {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
    updateUserController
} = require('../../controller/authController');

router.post('/signup', registerInfoCheckMiddleware, registrationController);
router.post('/login', loginInfoCheckMiddleware, loginController);
router.get('/current', authorizationMiddleware, checkCurrentUserController);
router.get('/logout', authorizationMiddleware, logoutController);
router.patch('/update', authorizationMiddleware, uploadAvatar, updateUserController)

module.exports = { authRouter: router };