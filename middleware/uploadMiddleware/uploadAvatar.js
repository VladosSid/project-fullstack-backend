const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const avatarImgParams = {
  dimensions: {
    width: 100,
    height: 100,
  },
  maxFileSize: 100000,
  acceptableFileTypes: ['jpg', 'png'],
};

const multerAvatar = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const imgName = `${req.user._id}_user_avatar`;
    
    return {
      folder: 'avatars',
      allowed_formats: avatarImgParams.acceptableFileTypes,
      public_id: imgName,
      transformation: [
        {
          height: avatarImgParams.dimensions.height,
          width: avatarImgParams.dimensions.width,
          crop: 'fill',
        },
      ],
      bytes: avatarImgParams.maxFileSize,
    };
  },
});

const uploadAvatar = multer({
  storage: multerAvatar,
}).single('img');

module.exports = uploadAvatar;
