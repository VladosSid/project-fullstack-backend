const service = require("../service/users");
const { validateUser, validatePut } = require("../helpers/validateBody");
const { updateAvatar } = require("../middlewares/refactorAvatar");
const sendEmailVerifi = require("../middlewares/sendEmailVerifyuser");

const singup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // validate data req
    const validateData = await validateUser(email, password);

    const errValidate = validateData.error;
    if (errValidate) {
      const err = errValidate.details[0].message;
      return res.status(400).json({
        status: "error",
        code: 400,
        message: err.replaceAll('"', ""),
        data: err.replaceAll('"', ""),
      });
    }

    // add DB user data
    const data = await service.singup(email, password);

    if (!data) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Email in use",
        data: "",
      });
    }

    sendEmailVerifi(data.email, data.verificationToken);

    return res.status(201).json({
      user: {
        status: "created",
        code: 201,
        email: data.email,
        subscription: data.subscription,
      },
    });
  } catch (err) {
    return res
      .status(404)
      .json({ status: "error", code: 404, message: err.message });
  }
};

const verifiEmailToken = async (req, res, next) => {
  try {
    const data = await service.verifiEmail(req.params.verificationToken);

    if (data === null) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Email verify",
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: err.message,
    });
  }
};

const verify = async (req, res, next) => {
  const email = req.body.email;
  try {
    if (!email) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required field email",
      });
    }

    const validateData = await validatePut({ email });

    const errValidate = validateData.error;
    if (errValidate) {
      const err = errValidate.details[0].message;
      return res.status(400).json({
        status: "error",
        code: 400,
        message: err.replaceAll('"', ""),
        data: err.replaceAll('"', ""),
      });
    }

    const data = await service.verifi(email);

    if (data.verify) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Verification has already been passed",
      });
    }

    sendEmailVerifi(data.email, data.verificationToken);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification email sent",
    });
  } catch (err) {
    return res
      .status(404)
      .json({ status: "error", code: 404, message: err.message });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // validate data req
    const validateData = await validateUser(email, password);
    const errValidate = validateData.error;

    if (errValidate) {
      const err = errValidate.details[0].message;
      return res.status(400).json({
        status: "error",
        code: 400,
        message: err.replaceAll('"', ""),
        data: err.replaceAll('"', ""),
      });
    }

    // logi user
    const data = await service.login(email, password);

    if (!data) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Email or password is wrong",
        data: "",
      });
    }

    if (data.verify) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "User not verification",
        data: data.verify,
      });
    }

    const { token, newTokenUser } = data;
    res.status(200).json({
      status: "success",
      code: 200,
      token: token,
      user: {
        email: newTokenUser.email,
        subscription: newTokenUser.subscription,
      },
    });
  } catch (err) {
    res.status(400).json({ status: "error", code: 400, message: err.message });
  }
};

const logout = (req, res, next) => {
  const { id } = req.user;

  try {
    const userUnconect = service.logout(id);

    res
      .status(204)
      .json({ status: "success", code: 204, message: "user logout" });
  } catch (err) {
    res.status(400).json({ status: "error", code: 400, message: err.message });
  }
};

const current = (req, res, next) => {
  const { email, subscription } = req.user;

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Curren user",
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;

  const { subscription } = req.body;
  if (!subscription) {
    return res.status(400).json({ message: "Bad request" });
  }

  if (
    subscription !== "starter" &&
    subscription !== "pro" &&
    subscription !== "business"
  ) {
    return res.status(400).json({
      message: "Bad request. subscription must have [starter, pro, business]",
    });
  }

  try {
    const dataUser = await service.subscription(_id, subscription);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Subscription update",
      data: {
        user: {
          email: dataUser.email,
          subscription: dataUser.subscription,
        },
      },
    });
  } catch (error) {}
};

const avatarUser = async (req, res, next) => {
  // const { description } = req.body;
  const { _id } = req.user;
  const { path } = req.file;

  try {
    updateAvatar(path, req.user.id);

    const data = await service.updateAvatar(_id, req.user.id);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Avatar update",
      data: {
        email: data.email,
        subscription: data.subscription,
        avatarURL: data.avatarURL,
      },
    });
  } catch (err) {
    console.log(err);
    res
      .status(401)
      .json({ status: "error", code: 401, message: "Not 123 authorized" });
  }
};

module.exports = {
  singup,
  verifiEmailToken,
  verify,
  login,
  logout,
  current,
  updateSubscription,
  avatarUser,
};
