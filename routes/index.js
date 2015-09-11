exports.home = function(req,res){
  res.render('home', {title:'Accueil'});
  console.log('Home Page!');
}
exports.news = function(req,res){
  res.render('news', {title:'Actualités'});
  console.log('News Page!');
}
exports.team = function(req,res){
  res.render('team', {title:'Equipe'});
  console.log('Team Page!');
}
exports.forum = function(req,res){
  res.render('forum', {title:'Forum'});
  console.log('Forum Page!');
}
exports.gallery = function(req,res){
  res.render('gallery', {title:'Galerie'});
  console.log('Gallery Page!');
}