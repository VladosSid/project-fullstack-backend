const Joi = require('joi');

// Схема валідації Joi для req.query
const querySchema = Joi.object({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1).max(100),
  type: Joi.string().valid('title', 'ingredients').required(),
  query: Joi.string().trim().min(1).required(),
});

module.exports = querySchema;
