const router = require("express").Router();


/* GET home page */
router.get("/profile", (req, res, next) => {
  res.render("auth/profile");
});


// router.get("/login", isLoggedOut, (req, res) => {
//   res.render("auth/login");
// }); 



module.exports = router;