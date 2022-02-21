/* 
  const router = require("express").Router();
  const SneaksAPI = require('sneaks-api');
  const Sneaks = new SneaksAPI();


  
app.get("/sneakers-search", (req, res, next) => {
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
  });




/* GET home page */
/* router.get("/sneakers", (req, res, next) => {

Sneaks.getProducts("Yeezy Cinder", 10, function(err, products){
  console.log(products)
  res.render("sneakers");
})
.catch((err) => console.log(`Err while displaying post input page: ${err}`))
}); */




// module.exports = router; */