
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


  
/* app.get("/sneakers-search", (req, res, next) => {
    spotifyApi
      .searchArtists(req.query.artistName)
      .then((data) => {
        console.log("The received data from the searchArtists: ", data.body.artists.items);
        res.render('artist-search-results', {artist: data.body.artists.items });
        // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      })
      .catch((err) =>
        console.log("The error while searching artists occurred: ", err)
      );
  }); */




 module.exports = router; 


