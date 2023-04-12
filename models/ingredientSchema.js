const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = model('ingredient', ingredientSchema);

module.exports = { Ingredient };
