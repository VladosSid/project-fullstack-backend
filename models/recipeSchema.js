const { Schema, model } = require('mongoose');

const recipeIngredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'ingredients',
      required: true,
    },
    measure: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
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
    time: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [recipeIngredientSchema],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    popularity: [String],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model('recipe', recipeSchema);

module.exports = { Recipe };
