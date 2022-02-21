const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();



/* GET home page */
router.get("/sneakers", async(req, res, next) => {

    /* let data = await sneaks.findAll(function(error, products){
        if (error) {
            console.log(error)
            return "No Products In Database";
          } else {
            console.log('products.data', products[0].shoeName)
            return products;
          }
}); */

 await sneaks.getProducts("", 100, function(err, products){
  if (err) {
    console.log(err)
    //return "No Products In Database";
  } else {
    console.log('products.data', products)
    res.render('sneakers',{products});
  }
  })



//   sneaks.getMostPopular(10, function(err, products){
//     console.log(products)})
//     res.render ("sneakers", {products})
// .catch((err) => console.log(`Err while displaying post input page: ${err}`))
});




module.exports = router;