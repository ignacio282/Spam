var mongoose=require('mongoose');


var CancionSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	album:String,
	artista:String,
	genero:String,
	fecha:String

});


mongoose.model('Canciones',CancionSchema,'canciones');