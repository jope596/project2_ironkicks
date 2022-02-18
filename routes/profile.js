const router = require("express").Router();


/* GET home page */
router.get("/userProfile", (req, res, next) => {
  res.render("profile");
});


// router.get("/login", isLoggedOut, (req, res) => {
//   res.render("auth/login");
// }); 



module.exports = router;