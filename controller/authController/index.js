const registrationController = require('./registrationController');
const loginController = require('./loginController');
const logoutController = require('./logoutController');
const checkCurrentUserController = require('./checkCurrentUserController');

module.exports = {
    registrationController,
    loginController,
    logoutController,
    checkCurrentUserController,
}