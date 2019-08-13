let Promise = require('./Promise');

function gen(times, cb) {
    let result = [], count = 0;
    return function (i, data) {
        result[i] = data;
        if(++count === times){
            cb(result);
        }
    }
}

// Promise.all 接收一个promise数组， 如果全部完成了promise才会成功
// 只要有一个失败，那么promise就失败
Promise.call = function (promises) {
  return new Promise(function (resolve, reject) {
      let done = gen(promises.length, resolve);
      for (let i = 0; i < promises.length; i++) {
          promises[i].then(function (data) {
              done(i, data);
          }, reject);
      }
  });
};

// Promise.race 接收一个promise数组， 谁先完成就是谁的状态
// 不管成功还是失败
Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    });
};

Promise.resolve = function (value) {
  return new Promise(function(resolve){
      resolve(value);
  })
};

Promise.reject = function (reason) {
    return new Promise(function(resolve, reject){
        reject(reason);
    })
};