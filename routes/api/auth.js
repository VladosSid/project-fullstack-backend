const express = require('express')
const router = express.Router()

// const { 
//     authMiddleware,
//     credentialsCheckMiddleware,
// } = require('../../middleware/authMiddleware');
const {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
} = require('../../controller/authController');

router.post('/signup', registrationController);
router.post('/login', loginController);
router.get('/current', checkCurrentUserController);
router.get('/logout', logoutController);

module.exports = { authRouter: router };