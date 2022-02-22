const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


router.post("/sneaker-details", async(req, res, next) => {
    //await sneaks.findOne(req.params.id, function(err, products) { 
        let shoeName = req.body.name.toString()
        console.log(req.body.name)
        await sneaks.getProducts(shoeName, 1, function(err, products){  
        if (err) {
            console.log (err)
            console.log('Product Details not found');
        } else {
            console.log (products[0])
            res.render('sneaker-details',{products: products[0]});
        }
    })
});



module.exports = router;


//Grabs sneaker info from the database given the styleID
/* app.get('/id/:id', function(req, res){
    sneaks.findOne(req.params.id, function(error, shoe){
        if (error) {
            res.send("Product Not Found");
          } else {
            res.json(shoe);
          }
    })
}); */



/* router.get("/sneakers", async(req, res, next) => {

 await sneaks.getProducts("", 24, function(err, products){
  if (err) {
    console.log(err)
    //return "No Products In Database";
  } else {
    console.log('products.data', products)
    res.render('sneakers',{products});
  }
  })

}); */



