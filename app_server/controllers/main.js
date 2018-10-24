module.exports.index=function(req,res){
    res.render('index', {title:'SPAM'});
};

module.exports.registro=function(req,res){
    res.render('Registro', {title:'Registro'});
};

module.exports.about=function(req,res){
    res.render('About', {title:'About'});
};

module.exports.settings=function(req,res){
    res.render('Settings', {title:'Settings'});
};

module.exports.favoritos=function(req,res){
    res.render('Favoritos', {title:'Favoritos'});
};
