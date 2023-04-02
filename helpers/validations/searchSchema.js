const Joi = require('joi')


const searchSchemas = Joi.object({
    query: Joi.string().required(),
    type:Joi.string().valid('ingredients', 'title').required(),
    page:Joi.string(),
    limit:Joi.string()
  });

  module.exports = searchSchemas