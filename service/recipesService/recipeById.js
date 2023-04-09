const { Recipe } = require('../../models/recipeSchema');
const { HttpError } = require('../../helpers');
const mongoose = require('mongoose');

const recipeById = async req => {
  const { id } = req.params;

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
    {
      $project: {
        area: 0,
        thumb: 0,
        tags: 0,
        createdAt: 0,
        updatedAt: 0,
        'ingredients.t': 0,
        popularity: 0,
        category: 0,
        youtube: 0,
      },
    },
  ]);

  if (!recipe || recipe.length === 0) {
    throw HttpError(404, `Recipe with id: ${id}  not found`);
  }
  return recipe;
};

module.exports = recipeById;
