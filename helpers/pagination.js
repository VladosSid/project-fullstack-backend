const pagination = (pageNumber, limit) => {
  const validatePage = pageNumber > 0 ? pageNumber : 1;
  const validateLimit = limit < 1 || limit > 10 ? 10 : Number(limit);
  const skip = (validatePage - 1) * validateLimit;

  return skip;
};

module.exports = pagination;
