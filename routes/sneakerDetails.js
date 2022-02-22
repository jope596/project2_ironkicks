const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


router.post("/sneaker-details", async(req, res, next) => {
    
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




