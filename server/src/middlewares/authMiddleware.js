module.exports = {
  ensureAuth(req, res, next) {
    req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/users" + req.user.username);
    });
    // if (req.login()) {
    //   return next();
    // } else {
    //   res.redirect("/");
    // }
  },
  ensureGuest(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
