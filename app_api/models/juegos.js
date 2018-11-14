var mongoose=require('mongoose');

var JuegoSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	estudio:String,
	genero:String,
	calificacion:String

});

mongoose.model('Juegos',JuegoSchema,'juegos');