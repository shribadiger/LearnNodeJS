/*
 * Extending the parent process functionality to client and server mechanism
 */

var child = require('child_process').fork('./extendedChildProcess.js');
var server = require('net').createServer(); //Creating the Web Server
server.on('connection',function(socket) {
	socket.end('Parent handled Connection');
});

server.listen(8080, function() {
	child.send("The Parent Message",server);
});
