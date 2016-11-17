var socket = io();


$( document ).ready(function() {
	  $('form').submit(function(){
	    socket.emit('chat message', $('#m').val());
	    $('#m').val('');
	    return false;
	  });

	});
	  