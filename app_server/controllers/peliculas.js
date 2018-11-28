var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
	apiOptions.server = "https://ejemploclaseservidor2.herokuapp.com";
}

var renderHomepage = function (req, res, responseBody){
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
//GET 'home' page
module.exports.homelist=function (req,res) {
	var requestOptions, path;
	path = '/api/peliculas';
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
