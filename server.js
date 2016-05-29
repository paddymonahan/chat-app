var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

var app.use(express.static(__dirname + '/public'));

http.listen(port, function(){
	console.log('app listening on port '+port);
});