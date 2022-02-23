const router = require("express").Router();
const Sneaker = require("../models/Sneaker.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");




router.get("/profile", isLoggedIn, async (req, res, next) => {
  await User.findById(req.session.user._id)
  .populate('favourite')
  .then((user) => {
    res.render("auth/profile", { user });
  })
});

// router.get("/profile", (req, res, next) => {

//   // const user = req.session.user;
//   // res.render("/profile", {user});
// }); 



// router.get("/login", isLoggedOut, (req, res) => {
//   res.render("auth/login");
// }); 




module.exports = router;