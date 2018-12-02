var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
	apiOptions.server = "https://ejemploclaseservidor2.herokuapp.com";
}

var renderPeliculas = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('index',{

		peliculas:responseBody,
		message : message
	});
}

var renderLibros = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('index',{

		libros:responseBody,
		message : message
	});
}

var renderCanciones = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('index',{

		canciones:responseBody,
		message : message
	});
}

var renderJuegos = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('index',{

		juegos:responseBody,
		message : message
	});
}

var renderSeries = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('index',{

		series:responseBody,
		message : message
	});
}


//GET 'home' page
module.exports.peliculasS=function (req,res) {
	var requestOptions, path;
	var d = new Date();
	var n = d.getDay();
	if(n===0){
		path = '/api/libros';
	}
	if(n===1){
		path = '/api/peliculas';
	}
	if(n===2){
		path = '/api/series';
	}
	if(n===3){
		path = '/api/juegos';
	}
	if(n===4){
		path = '/api/canciones';
	}
	if(n===5){
		path = '/api/peliculas';
	}
	if(n===6){
		path = '/api/series';
	}

	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			renderPeliculas(req, res, data);
		});
};

module.exports.seriesS=function (req,res) {
	var requestOptions, path;
	path = '/api/series';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			renderSeries(req, res, data);
		});
};

module.exports.librosS=function (req,res) {
	var requestOptions, path;
	path = '/api/libros';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			renderLibros(req, res, data);
		});
};

module.exports.cancionesS=function (req,res) {
	var requestOptions, path;
	path = '/api/canciones';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			renderCanciones(req, res, data);
		});
};


module.exports.juegosS=function (req,res) {
	var requestOptions, path;
	path = '/api/juegos';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			renderHomepage(req, res, data);
		});
};
