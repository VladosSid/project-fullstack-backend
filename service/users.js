const User = require("./schemas/users");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const SECRET = process.env.SECRET;

const findUser = (email) => {
  return User.findOne({ email });
};

const singup = async (email, password) => {
  const checkoutUser = await findUser(email);
  if (checkoutUser) {
    return null;
  }

  try {
    const newUser = new User({
      email,
      password,
      avatarURL: gravatar.url(email),
      verificationToken: uuidv4(),
    });
    newUser.setPassword(password);

    return User.create(newUser);
  } catch (err) {
    return err.message;
  }
};

const verifiEmail = async (verificationToken) => {
  return await User.findOneAndUpdate(
    { verificationToken },
    {
      verify: true,
      verificationToken: null,
    },
    { new: true }
  );
};

const verifi = async (email) => {
  return await findUser(email);
};

const login = async (email, password) => {
  const checkoutUser = await findUser(email);

  if (!checkoutUser || !checkoutUser.validPassword(password)) {
    return null;
  }

  if (!checkoutUser.verify) {
    return {
      verify:
        "Confirm your registration, you have been sent a notification to the e-mail address specified during registration. To resend the letter, follow the link: http://localhost:3000/api/user/verify",
    };
  }

  const payload = {
    userId: checkoutUser.id,
  };

  const token = jwt.sign(payload, SECRET);

  const newTokenUser = await User.findByIdAndUpdate(checkoutUser._id, {
    token: token,
  });

  return { newTokenUser, token };
};

const logout = async (userId) => {
  const newTokenUser = await User.findByIdAndUpdate(userId, {
    token: null,
  });
};

const subscription = async (userId, subscription) => {
  return await User.findByIdAndUpdate(userId, { subscription }, { new: true });
};

const updateAvatar = async (userId, urlAvatar) => {
  const data = await User.findByIdAndUpdate(
    userId,
    {
      avatarURL: `http://localhost:3000/static/avatars/avataruser-${urlAvatar}.jpg`,
    },
    {
      new: true,
    }
  );

  // console.log(data);

  return data;
};

module.exports = {
  singup,
  verifiEmail,
  verifi,
  login,
  logout,
  subscription,
  updateAvatar,
};
