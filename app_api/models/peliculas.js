var mongoose=require('mongoose');

var peliculaSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	sinopsis:String,
	director:String,
	duracion:String,
	calificacion:String

});





mongoose.model('Peliculas',peliculaSchema,'peliculas');
