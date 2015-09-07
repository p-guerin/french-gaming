exports.home = function(req,res){
  res.render('home', {title:'Accueil'});
  console.log('Home Page!');
}