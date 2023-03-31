const authorizationMiddleware = require('./authorizationMiddleware');
const credentialsCheckMiddleware = require('./credentialsCheckMiddleware');

module.exports = {
    authorizationMiddleware,
    credentialsCheckMiddleware
}