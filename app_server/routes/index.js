var express = require('express');
var router = express.Router();

var Home = require('../controllers/main.js');
router.get('/', Home.index);

var Home = require('../controllers/main.js');
router.get('/home', Home.index);

var Registro = require('../controllers/main.js');
router.get('/registro', Registro.registro);

var About = require('../controllers/main.js');
router.get('/about', About.about);

var Settings = require('../controllers/main.js');
router.get('/settings', Settings.settings);

var Favoritos = require('../controllers/main.js');
router.get('/favoritos', Favoritos.favoritos);

module.exports=router;
