const authorizationMiddleware = require('./authorizationMiddleware');
const registerInfoCheckMiddleware = require('./registerInfoCheckMiddleware');
const loginInfoCheckMiddleware = require('./loginInfoCheckMiddleware');

module.exports = {
    authorizationMiddleware,
    registerInfoCheckMiddleware,
    loginInfoCheckMiddleware
}