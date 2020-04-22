/*
 * This function will create the child process and call the send message to
 * child process
 */
var childProcess = require('child_process');
var childID = childProcess.fork(__dirname + '/childProcess.js');

childID.on('message',function(msg) {
	console.log('Child Process Resp: ' + msg);
});
childID.send('I am parent process');
