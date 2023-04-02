const registrationController = require('./registrationController');
const loginController = require('./loginController');
const logoutController = require('./logoutController');
const checkCurrentUserController = require('./checkCurrentUserController');
const updateUserController = require('./updateUserController');

module.exports = {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
    updateUserController
}