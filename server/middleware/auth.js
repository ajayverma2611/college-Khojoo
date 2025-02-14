const isAuthenticated = (req, res, next) => {
  
  if (!req.session.user) return res.status(401).json({ message: "Not authenticated" });
  // res.status(200).json({ user: req.session.user });

  next();
};

module.exports = isAuthenticated;
