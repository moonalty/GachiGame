const signUpCheck = (req, res, next) => {
  if (req.session?.user?.id) {
    res.locals.isAuthorized = true;
    res.locals.userName = req.session.user.name;
  } else {
    res.locals.isAuthorized = false;
    res.locals.userName = undefined;
  }
  next();
};

module.exports = signUpCheck;
