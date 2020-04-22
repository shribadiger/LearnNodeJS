/*
 * Program to check about the IPC in nodejs functionality
 */
setInterval(function() {},1e6);
process.on('SIGUSR1',function() {
	console.log('Got a signal..!');
	process.exit(1); //If we not provide teh process exit. Even after handling the signal, process will not get terminate
});

