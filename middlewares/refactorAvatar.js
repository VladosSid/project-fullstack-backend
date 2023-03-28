const Jimp = require("jimp");
const path = require("path");
const fs = require("fs");

const storageDir = path.join(process.cwd(), "public/avatars");

const updateAvatar = (path, userId) => {
  Jimp.read(path)
    .then((img) => {
      return img
        .resize(250, 250)
        .quality(60)
        .write(`${storageDir}/avataruser-${userId}.jpg`);
    })
    .catch((err) => {
      return err;
    });

  // console.log(fs.readFile(path));
  // fs.unlink(path);
};

module.exports = { updateAvatar };
