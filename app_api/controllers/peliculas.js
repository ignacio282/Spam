var mongoose = require('mongoose');
var Peli = mongoose.model('Peliculas');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}
module.exports.peliculasCreate = function (req, res) {
	sendJsonResponse(res, 200,{"status":"success"}); 
	};
module.exports.peliculasList = function (req, res) { 
	sendJsonResponse(res, 200,{"status":"success"});
	};

module.exports.peliculasUpdateOne = function (req, res) { 
	sendJsonResponse(res, 200,{"status":"success"});
	};
module.exports.peliculasDeleteOne = function (req, res) { 
	sendJsonResponse(res, 200,{"status":"success"});
	};



	module.exports.peliculasReadOne = function(req, res){
		if (req.params && req.params.peliculaid){
			Peli
				.findById(req.params.peliculaid)
				.exec(function(err, pelicula){
					if(!pelicula){
						console.log(req.params.peliculaid);
						sendJsonResponse(res, 404, {
							"message": "peliculaid not found"
						});
						return;
					} else if(err){
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 200, pelicula);
				});
		}else{
			sendJsonResponse(res, 404, {
				"message": "No peliculaid in request"
			});
		}
	};