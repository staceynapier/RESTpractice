var express = require('express');
var router = express.Router();


router.use('/api/films', require ('./films.js'));

router.get('/', function(req, res) {
  res.json({data: "Film Reviews"});
})

module.exports = router;
