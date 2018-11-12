
var express = require ('express');
var router = express.Router();
var ctrlPeliculas = require('../controllers/peliculas');


//Peliculas
router.get('/peliculas', ctrlPeliculas.peliculasList);
router.post('/peliculas',ctrlPeliculas.peliculasCreate);
router.get('/peliculas/:peliculaid',ctrlPeliculas.peliculasReadOne);
router.put('/peliculas/:peliculaid',ctrlPeliculas.peliculasUpdateOne);
router.delete('/peliculas/:peliculaid', ctrlPeliculas.peliculasDeleteOne);


module.exports = router;