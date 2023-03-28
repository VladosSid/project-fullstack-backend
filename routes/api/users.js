const express = require("express");
const multer = require("multer");
const path = require("path");

const ctrlUsers = require("../../controller/users");
const { validationUserToken } = require("../../middlewares/userAuthorazed");

const router = express.Router();
const uploadDir = path.join(process.cwd(), "tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const [fileName, extension] = file.originalname.split(".");
    cb(null, `${fileName}.${extension}`);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage,
});

router.post("/singup", ctrlUsers.singup);

router.get("/auth/verify/:verificationToken", ctrlUsers.verifiEmailToken);

router.post("/verify", ctrlUsers.verify);

router.post("/login", ctrlUsers.login);

router.get("/logout", validationUserToken, ctrlUsers.logout);

router.get("/current", validationUserToken, ctrlUsers.current);

router.patch(
  "/subscription",
  validationUserToken,
  ctrlUsers.updateSubscription
);

router.patch(
  "/avatars",
  [validationUserToken, upload.single("avatar")],
  ctrlUsers.avatarUser
);

module.exports = router;
