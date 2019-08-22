// function gen(times, cb) {
//     var count = 0, result = [];
//     return function (i, data) {
//         result[i] = data;
//         if(++count === times){
//             cb(result);
//         }
//     }
// }

function gen(times, cb) {
    let result = [];
    return function (data) {
        result.push(data);
        if(result.length === times){
            cb(result);
        }
    }
}
Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
        let done = gen(promises.length, resolve);
        for (let i = 0; i < promises.length; i++) {
             promises[i].then(function (data) {
                 done(data);
             }, reject);
        }
    });
};
Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    });
};


let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(1);
    }, 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject(5);
    }, 1000);
});

console.time('cost');

Promise.race([p1, p2]).then(function (data) {
    console.log(data);
    console.timeEnd('cost');
}, function (err) {
    console.log(err);
    console.timeEnd('cost');
});

Promise.resolve = function (value) {
  return new Promise(function (resolve) {
      resolve(value);
  });
};

Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
        reject(reason);
    });
};
