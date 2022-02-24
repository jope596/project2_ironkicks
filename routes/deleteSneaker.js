const router = require("express").Router();


const User = require("../models/User.model");
const Sneaker = require("../models/Sneaker.model");

  
router.post("/profile/delete/sneakers/:sneakerId", async(req, res, next) => {
    const { sneakerId } = req.params;

    User.findByIdAndUpdate(req.session.user._id, {
      $pull: { favourite: sneakerId },
    })
    .then(() => res.redirect("/profile"))
    .catch((err) => next(err));
});

module.exports = router;
