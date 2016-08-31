const express = require('express');
const http = require('http');
const socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketio(server);

var paintingId = 0;

app.use('/', express.static('src'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  socket.on('add painting', function (painting) {
    painting.id = paintingId;
    io.emit('add painting', painting);
    paintingId += 1;
  });

  socket.on('move painting', function (painting) {
    io.emit('move painting', painting);
  });

  socket.on('change background', function (url) {
    io.emit('change background', url);
  });
});

// listen for requests :)
var listener = server.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
