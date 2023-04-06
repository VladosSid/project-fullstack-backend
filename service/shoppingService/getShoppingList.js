const mongoose = require('mongoose');
const { User } = require('../../models/userSchema');

const { HttpError } = require('../../helpers');

const getShoppingList = async req => {
  const { _id: userId } = req.user;

  if (!userId) {
    throw HttpError(404, 'User not found');
  }
  const result = User.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(userId) } },
    {
      $lookup: {
        from: 'ingredients',
        localField: 'shoppingList.id',
        foreignField: '_id',
        as: 'ingr_nfo',
      },
    },
    {
      $project: {
        shoppingList: {
          $map: {
            input: '$shoppingList',
            as: 'item',
            in: {
              $mergeObjects: [
                {
                  $arrayElemAt: [
                    '$ingr_nfo',
                    { $indexOfArray: ['$ingr_nfo._id', '$$item.id'] },
                  ],
                },
                '$$item',
              ],
            },
          },
        },
      },
    },
    {
      $unset: ['ingr_nfo', 'shoppingList.id'],
    },
    {
      $project: {
        'shoppingList._id': 1,
        'shoppingList.title': 1,
        'shoppingList.measure': 1,
        'shoppingList.imageUrl': 1,
      },
    },
  ]);

  return result;
};

module.exports = getShoppingList;
