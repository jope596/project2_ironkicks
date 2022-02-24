const router = require("express").Router();


const User = require("../models/User.model");
const Sneaker = require("../models/Sneaker.model");


router.post('/profile', async(req, res, next) => {
    const { name, price, image } = req.body;
  
     Sneaker.create({ name, price, image })
      .then((addSneaker) => {
    return User.findByIdAndUpdate(req.session.user._id, { $push: { favourite: addSneaker._id } });
      })
      .then(() => res.redirect('/profile'))
      .catch((err) => next(err));
  });

module.exports = router;
