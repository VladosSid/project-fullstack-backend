const express = require('express')
const router = express.Router()

const { 
    authorizationMiddleware,
    registerInfoCheckMiddleware,
    loginInfoCheckMiddleware,
 } = require('../../middleware/authMiddleware');
const {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
} = require('../../controller/authController');

router.post('/signup', registerInfoCheckMiddleware, registrationController);
router.post('/login', loginInfoCheckMiddleware, loginController);
router.get('/current', authorizationMiddleware, checkCurrentUserController);
router.get('/logout', authorizationMiddleware, logoutController);
router.patch('/update')

module.exports = { authRouter: router };