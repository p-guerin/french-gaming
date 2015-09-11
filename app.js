var express = require('express');
var routes  = require('./routes');

var app     = express();
var port    = 3000;


// Settings
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));


// Routes
app.get('/', routes.home);
app.get('/news', routes.news);
app.get('/team', routes.team);
app.get('/forum', routes.forum);
app.get('/gallery', routes.gallery);

// Server
app.listen(port);