var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

//initialize io and allow us to listen for events
io.on('connection', function(socket){
	console.log('user connected via socket.io');

	socket.on('message', function(message){
		console.log('message received: ' +message.text);
		
		//send to everybody but the sender
		socket.broadcast.emit('message',message);
	});

	socket.emit('message', {
		text : 'welcome to the chat application yo'
	});
});

http.listen(port, function(){
	console.log('app listening on port '+port);
});