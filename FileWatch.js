/*
 * fs.watch functionality explaination
 */
var fs = require('fs');
fs.watch(__filename, { persistent : false }, function(event, filename) {
	console.log(event);
	console.log(__filename);
});

setImmediate(function()  {
	fs.rename(__filename, __filename + '.new',function() {});
});

var w = fs.watch('file',function() {})
w.close();
