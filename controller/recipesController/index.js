const { ctrlWrapper } = require('../../helpers');

const getCategoryList = require('./getCategoryList');

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
};
