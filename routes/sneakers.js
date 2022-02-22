const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();



router.get("/sneakers", async(req, res, next) => {

 await sneaks.getProducts("", 24, function(err, products){
  if (err) {
    console.log(err)
    //return "No Products In Database";
  } else {
    console.log('products.data', products)
    res.render('sneakers',{products});
  }
  })

});




module.exports = router;