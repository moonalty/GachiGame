const router = require("express").Router();
const { User, Question, Theme } = require("../db/models");
//
const bcrypt = require("bcrypt");
const saltRounds = 3;
//

//
router.route("/home").get(async (req, res) => {
  const questions = await Question.findAll();
  console.log(questions);
  // res.json(questions);
  res.json(questions);
});

// //
// router.route("/main").get((req, res) => {
//   res.render("main");
// });


router.route('/gameForm')
.get(async(req, res)=> {
  const theme = await Theme.findAll()
  res.json(theme)
})

router.route('/gameForm/themes/costs/:id')
.get(async (req, res)=> {
  const costs = await Question.findAll({where: {id: req.params.id}})
  res.json({costs})
}) 


//
// router.route("/login").get((req, res) => {
//   res.render("login");
// });

//
router
  .route("/registration")
  .get((req, res) => {
    console.log();


    res.json({ lo: "wadwadadfvdfvdvdwdawdawdwadawdawdawdaw" });

  })
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    try {
      const emailNotValid = await User.findOne({
        where: { email },
      });
      if (emailNotValid) {
        res.json({ message: "User already exists!" });
      } else {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({
          name,
          email,
          password: hashPassword,
        });
        req.session.user = user;
        res.json({ message: "Welcome!" });
      }
    } catch (error) {
      res.json({ message: "Try later" });
    }
  });
//

router
  .route("/login")
  .get((req, res) => {
    console.log();
    res.json({ lo: "wadwadawdadbgevwdawdwadawdawdawdaw" });
  })
  .post(async (req, res) => {
    // console.log("AAAAAAAAAAAAAA",req.body);
    // const user = await User.create({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    //   score:300,
    // });
    // res.json({ do: "kjfdh" });
    try {
      const { email, password } = req.body;
      console.log(req.body)
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        req.session.user = user;
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
          res.json({ message: `Incorrect password!` });
        } else {
          res.json({ message: "Welcome", user:req.session.user });
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
