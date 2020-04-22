/*
 * Example program to check the Event Emitter by means of process.nextTick() 
 */
var events = require('events');
function getEmitter() {
	var emitter = new events.EventEmitter(); //Creating new EventEmitter
	process.nextTick(function() { // First remove this nextTick(), You will not get any output bcz of event
		//race condition, after adding next tick. the process will catch next instruction and trigger event
		emitter.emit('start');
	});
	return emitter;
}

var myEmitter = getEmitter();

myEmitter.on("start",function() {
	console.log("Started..!!");
	console.log("Max Process Tick Depth : " + process.maxTickDepth);
});
