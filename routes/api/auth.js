const express = require('express')
const router = express.Router()

const { 
    authMiddleware,
    credentialsCheckMiddleware,
 } = require('../../middleware/authMiddleware');
const {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
} = require('../../controller/authController');

router.post('/signup', credentialsCheckMiddleware, registrationController);
router.post('/login', credentialsCheckMiddleware, loginController);
router.get('/current', authMiddleware, checkCurrentUserController);
router.get('/logout', authMiddleware, logoutController);

module.exports = { authRouter: router };