const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const recipeIngredientSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ingredients',
    required: true,
  },
  measure: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    favorites: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe',
        },
      ],
    },
    subscribed: {
      type: String,
      default: '',
    },
    shoppingList: {
      type: [recipeIngredientSchema],
      required: true,
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
