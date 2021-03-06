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

//.listen(process.env.PORT || 5000)
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});