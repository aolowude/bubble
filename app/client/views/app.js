Template.message.rendered = function() {
	console.log("Rendered");
	Streamy.broadcast('hello', { data: 'Message Text!' });

};

// Send a message to all connected sessions (Client & server)

// Attach an handler for a specific message
Streamy.on('hello', function(d, s) {
  console.log(d.data); // Will print 'world!'
  // On the server side only, the parameter 's' is the socket which sends the message, you can use it to reply to the client, see below
});

