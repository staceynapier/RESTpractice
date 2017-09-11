var express = require('express');
var filmRouter = express.Router();
//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmRouter.get('/', function(req, res) {
  res.json(films);
})

filmRouter.get('/:id', function(req, res) {
  res.json({ data: films[req.params.id]} );
})

filmRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json({ data: films });
})

filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({ data:films });
})

filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
})

module.exports = filmRouter;
