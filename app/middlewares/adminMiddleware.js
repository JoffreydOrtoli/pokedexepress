const adminMiddleware = (req, res, next) => {
  if (req.session.user.role === "admin") {
    next();
  } else {
    return res.status(401).json("401");
  }
  next();
};

module.exports = adminMiddleware;
