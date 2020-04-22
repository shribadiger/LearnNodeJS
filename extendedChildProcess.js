/*
 * This will handle the extended functionality of child process with client module
 */
process.on('message',function(msg,server) {
	console.log("Server Message : " + msg);
	server.on('connection',function(socket) {
		socket.end('Child Process handled Connection');
	});
});
