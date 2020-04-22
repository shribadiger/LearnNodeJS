/*
 * Please check the callbackExplain.js functions. There handling the functions in callback mechanism.
 * Here, we are using the promise to resolve the samething in this example.
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
    //creating the promise
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            data.push(value);
            const error = false;
            if (!error) {
                resolve();
            } else {
                console.log("Something wrong");
            }
        }, 2000);

    });
}

printFristList();
printSecondList({ title: 'WEBSEREVR', body: 'WebServer Repo' }).then(printFristList);

