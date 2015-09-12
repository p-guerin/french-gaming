var express  = require('express');
var mongoose = require('mongoose');
var fs       = require('fs');
var routes   = require('./routes');

var app      = express();
var port     = 3000;


// Modeles
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});
var News = mongoose.model('News');


// Mongoose
mongoose.connect('mongodb://localhost:27017/french_gaming', function (err, res) {
  if (err) {
  console.log ('ERROR connecting to database. ' + err);
  } else {
  console.log ('Succeeded connected to database');
  }
});


// Settings
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));


// Routes
app.get('/', routes.home);
app.get('/news', routes.news);
app.get('/team', routes.team);
app.get('/forum', routes.forum);
app.get('/gallery', routes.gallery);

app.post('/', routes.create_news);

// Server
app.listen(port);