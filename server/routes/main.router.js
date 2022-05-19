const router = require("express").Router();
const { User, Question, Theme } = require("../db/models");
//
const bcrypt = require("bcrypt");
const saltRounds = 3;
//

//
router.route("/").get(async (req, res) => {
  const q = await Theme.findOne({ where: { id: 1 } });
  res.render("index", { q });
});

//
router.route("/main").get((req, res) => {
  res.render("main");
});

//
router.route("/login").get((req, res) => {
  res.render("login");
});

//
router
  .route("/registration")
  .get((req, res) => {
    res.render("23232323232");
  })
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    try {
      const emailNotValid = await User.findOne({
        where: { email },
      });
      const nameNotValid = await User.findOne({
        where: { name },
      });
      if (emailNotValid || nameNotValid) {
        res.json({ message: "Incorrect name or email" });
      } else {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({
          name,
          email,
          password: hashPassword,
        });
        req.session.user = user;
        res.json({ message: "Welcome" });
      }
    } catch (error) {
      res.json({ message: "Try later" });
    }
  });
//

router
  .route("/login")
  .get((req, res) => {
    res.render("wadwadawdawdawdwadawdawdawdaw");
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        req.session.user = user;
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
          res.json({ message: `Incorrect password!` });
        } else {
          res.json({ message: "Welcome" });
        }
      } else {
        res.json({ message: `User ${email} not found` });
      }
    } catch (error) {
      res.json({ message: "Try later" });
    }
  });

router.get("/logout", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("user_sid");
    // res.redirect("/");
  } catch (error) {
    res.end();
  }
});

module.exports = router;
