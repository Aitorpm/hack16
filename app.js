var express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
routes = require('./routes/index'),
app = express(),
socket_server = require('http').Server(app),
io = require('socket.io')(socket_server);


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


//SOCKET.IO SERVER

io.on('connection', function(conn) {
  console.log("CONECTION!");
  conn.emit('connection', "Connexion creada");
});

// Start server
server.listen(8080, function() {console.log("Node server running on http://localhost:8080");});

socket_server.listen(3000, function(){console.log("Socket.io running on http://localhost:8080");});


