var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.set('port', process.env.PORT || 9090);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(9090, function(){
  console.log('listening on *:9090');
});