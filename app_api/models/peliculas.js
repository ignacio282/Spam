var mongoose=require('mongoose');

var peliculaSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	sinopsis:String,
	director:String,
	imagen:String,
	duracion:Number,
	calificacion:Number,
	fecha:Number,
	fav:Boolean

});





mongoose.model('Peliculas',peliculaSchema,'peliculas');
