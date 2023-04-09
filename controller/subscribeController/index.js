const { ctrlWrapper } = require('../../helpers');

const addSubscribe = require('./subscribe');

module.exports = {
  addSubscribe: ctrlWrapper(addSubscribe),
};
