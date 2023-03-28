const jwt = require("jsonwebtoken");
const User = require("../service/schemas/users");

const SECRET = process.env.SECRET;

const validationUserToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const [tokenType, token] = req.headers.authorization.split(" ");
  if (!token || tokenType !== "Bearer") {
    return res.status(401).json({ message: "Not authorized" });
  }
  const { userId } = jwt.verify(token, SECRET);
  const user = await User.findById(userId);

  if (!user || user.token !== token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  req.user = user;
  next();
};

module.exports = { validationUserToken };
