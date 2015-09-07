var express = require('express');
var routes  = require('./routes');

var app     = express();
var port    = 3000;


// Settings
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));


// Routes
app.get('/', routes.home);

// Server
app.listen(port);