const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const Sneaks = new SneaksAPI();

/* GET home page */
router.get("/sneakers", (req, res, next) => {

Sneaks.getProducts("Yeezy Cinder", 10, function(err, products){
  console.log(products)
  res.render("sneakers");
})
.catch((err) => console.log(`Err while displaying post input page: ${err}`))
});




module.exports = router;