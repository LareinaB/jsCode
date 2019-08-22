let Promise = require('./simplePromise');

let p1 = new Promise((resolve, reject) => {

        let num = Math.random();
        if(num > .5){
            resolve('success');
        } else {
            reject('failure');
        }

});

var p2 = p1.then((value) => {
    return value;
}, (reason) => {
    console.log(reason);
});
console.log(p2);
