
  const router = require("express").Router();
  const SneaksAPI = require('sneaks-api');
  const sneaks = new SneaksAPI();



  router.get('/sneakers-search', (req, res, next)=>{
    const count = req.query.count || 40 // if the user doesn't provide the query param, it defaults to 40
      sneaks.getProducts(req.query.sneakerName, count, function(err, products){
        if (err) {
            console.log(err)
           // res.send("Product Not Found");
          } else {
          res.render('sneaker-search-results', {products})  
          }
          
    })
  });



 module.exports = router; 


