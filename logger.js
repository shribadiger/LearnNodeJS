var url = "http://mylogger.io";
function log(message) {
    console.log(message);
}

//Now Export as module to global scope
module.export.log = log;
module.export.endPoint = url;
