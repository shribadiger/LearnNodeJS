/*
 * This is a program executing from the ParentProcess.js to execute some output
 */
process.on('message',function(msg) {
	console.log('Parent Process sent: ',msg);
	process.send('I am child process');
});
