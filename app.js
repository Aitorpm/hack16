var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');


var app = express();

require('mongoose-middleware').initialize(mongoose);
mongoose.connect('mongodb://localhost/hack', function(err) {
  if(err) throw err;
  console.log('Conectados con éxito a la Base de Datos');
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



module.exports = app;

var server = require('http').Server(app);

// Start server
server.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});
