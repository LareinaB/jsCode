let Promise = require('./simplePromise');

let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log(1);
    });
        let num = Math.random();
        if(num > .5){
            resolve('success');
        } else {
            reject('failure');
        }

});

var p2 = p1.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
});

