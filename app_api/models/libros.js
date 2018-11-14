var mongoose=require('mongoose');

var libroSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	autor:String,
	genero:String,
	fecha:String,
	paginas:String

});

mongoose.model('Libros',libroSchema,'libros');