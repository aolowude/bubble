Streamy.onConnect(function(socket) {
	connId = Streamy.id(socket);
    console.log(connId);
});

Streamy.on('hello', function(d, s) {
	console.log(d.data); // Will print 'world!'

  // On the server side only, the parameter 's' is the socket which sends the message, you can use it to reply to the client, see below
});