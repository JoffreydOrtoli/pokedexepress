require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenControl = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(404).send("error");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).send("error");
    }
    req.user = user;
    next();
  });
};

module.exports = tokenControl;
