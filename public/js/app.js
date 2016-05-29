var socket = io();


socket.on('connect', function(){
	console.log('connected to socket io server');


});

socket.on('message', function(data){
	console.log(data.text);

	jQuery('.messages').append('<p>'+data.text+'</p>');
});

//handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(){
	event.preventDefault();

	var $message = $form.find('input');
	console.log('this is the value ' + $message.val());
	socket.emit('message',{
		text : $message.val()
	});
	$message.val('');
});