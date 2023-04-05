const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');
const mongoose = require('mongoose');

const recipeById = async req => {
  const { id } = req.params;

  // const recipe = await Recipe.find({ _id: id });
  const recipe = await Recipe.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: 'ingredients',
        localField: 'ingredients.id',
        foreignField: '_id',
        as: 'ingr_nfo',
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: '$ingredients',
            in: {
              $mergeObjects: [
                '$$this',
                {
                  $arrayElemAt: [
                    '$ingr_nfo',
                    {
                      $indexOfArray: ['$ingr_nfo._id', '$$this.id'],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ['ingr_nfo', 'ingredients.id'],
    },
  ]);

  if (!recipe || recipe.length === 0) {
    throw HttpError(404, `Recipe with id: ${id}  not found`);
  }
  return recipe;
};

module.exports = recipeById;
