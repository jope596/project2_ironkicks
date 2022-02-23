const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


router.post('/books/:bookId/delete', (req, res, next) => {
    const { bookId } = req.params;
  
    Book.findByIdAndDelete(bookId)
      .then(() => {
        res.redirect(`/books`);
      })
      .catch((err) => {
        next(err);
      });
  });





  

  module.exports = router;
  