const router = require("express").Router();




router.get("/profile", (req, res, next) => {
  const user = req.session.user;
  res.render("auth/profile", { user });
});

// router.get("/profile", (req, res, next) => {

//   // const user = req.session.user;
//   // res.render("/profile", {user});
// }); 



// router.get("/login", isLoggedOut, (req, res) => {
//   res.render("auth/login");
// }); 



module.exports = router;