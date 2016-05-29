var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

//initialize io and allow us to listen for events
io.on('connection', function(){
	console.log('user connected via socket.io');
});

http.listen(port, function(){
	console.log('app listening on port '+port);
});