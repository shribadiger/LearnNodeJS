/*
* This code are written in callback mechanism, if we remove the callback function,
* the value get converts only 2 Entries or data array. After adding the callback,
* printSecondList() has the 2 sec value. After 2 second, It going to call the callback function
* which is passed in callee.
*/
var data = [
    { title: 'IOWA', body: 'Iowa Repository' },
    { title: 'DOWNLOAD', body: 'Downloader Repo' }
];

function printFristList() {
    setTimeout(function () {
        var output = '';
        data.forEach(function (value, index) {
            console.log("Value :" + value.title + "Index :" + index);
            output += value;
        });
    }, 1000);
}

function printSecondList(value, callback) {
    setTimeout(function () {
        data.push(value);
        callback();
    }, 2000);
}

printFristList();
printSecondList({ title: 'WEBSEREVR', body: 'WebServer Repo' }, printFristList);

