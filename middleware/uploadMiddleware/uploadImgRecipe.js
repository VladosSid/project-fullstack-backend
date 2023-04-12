const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { v4: uuidv4 } = require('uuid');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const recipeImgParams = {
  dimensions: {
    width: 300,
    height: 323,
  },
  maxFileSize: 1000000,
  acceptableFileTypes: ['jpg', 'png'],
};

const multerImgRecipe = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const { _id } = req.user;
    const id = uuidv4();
    const recipeName = `${_id}_${id}_recipe`;
    return {
      folder: 'recipes_photos',
      allowed_formats: recipeImgParams.acceptableFileTypes,
      public_id: recipeName,
      transformation: [
        {
          height: recipeImgParams.dimensions.height,
          width: recipeImgParams.dimensions.width,
          crop: 'fill',
        },
      ],
    };
  },
});

const uploadImgRecipe = multer({
  storage: multerImgRecipe,
}).single('img');

module.exports = uploadImgRecipe;
