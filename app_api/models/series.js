var mongoose=require('mongoose');

var SerieSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	sinopsis:String,
	genero:String,
	fecha:String,
    temporadas:String,
    calificacion:String

});

mongoose.model('Series',SerieSchema,'series');