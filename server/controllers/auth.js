exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  return res.json({ msg: "Logged In" });
};
