var express  = require('express');
var mongoose = require('mongoose');
var fs       = require('fs');

fs.readdirSync(__dirname + '/../app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/../app/models/' + file);
});
var News = mongoose.model('News');


exports.home = function(req,res){
  var news = News.find().sort({"date":-1}).limit(6).exec(function(err, news) {
    res.render('home', {title:'Accueil', news:news})
    console.log('Home Page!');
  });
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
exports.create_news = function(req,res){
  new News({
    title       : 'Test',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla inventore magni dolore autem cumque laudantium totam, quasi, omnis itaque sed!',
    link        : '/news',
    image       : '2.jpg',
    image_alt   : 'choux à la crème'
  }).save(function(err){
      if(!err) {
          res.redirect('/');
          console.log('New news')
      } else {
          console.log(err);
          res.redirect('/');
      }
  });
}