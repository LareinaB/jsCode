const PENDING = 'pending'; // 初始态
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function Promise(executor) {
    let _this = this; // 当前Promise实例
    _this.status = PENDING;
    // 定义存放成功的回调函数数组
    _this.onResolvedCallbacks = [];
    // 定义存放失败的回调函数数组
    _this.onRejectedCallbacks = [];

    // 此函数执行可能出异常
    // 调用此方法 如果是pending，就可以转为resolve，若是resolve或者reject不处理
    function resolve(value) {
        if(value instanceof Promise){
            return value.then(resolve, reject);
        }
        if (_this.status === PENDING) {
            _this.status = FULFILLED;
            _this.value = value;
            // 调用成功的回调
            _this.onResolvedCallbacks.forEach(cb => cb(_this.value));
        }
    }

    function reject(error) {
        if (_this.status === PENDING) {
            _this.status = REJECTED;
            _this.value = error; // 失败的原因
            _this.onRejectedCallbacks.forEach(cb => cb(_this.value))
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        // 函数执行失败了
        reject(e);
    }
}

function resovlePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        throw TypeError("循环调用");
    }
    let called = false; // promise2是否resolved或者reject（状态只能改一次）
    if (x instanceof Promise) {
        // x是pending状态的话，promise2就得等待他处理完成
        if (x.status === PENDING) {
            x.then(function (y) {
                resovlePromise(promise2, y, resolve, reject);
            }, reject);
            // 不是pending就把x传递过来的值给promise2
        } else {
            x.then(resolve, reject);
        }
        // x是对象或者函数 只要有then方法就可
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                // 当我们的promise和别人的promise进行交互，编写这段代码要考虑到乱写的内容
                then.call(x, function (y) {
                    // 如果promise2已经成功或失败，就不会再处理
                    if (called) {
                        return;
                    }
                    called = true;
                    // 递归调用
                    resovlePromise(promise2, y, resolve, reject);
                }, function (err) {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(err);
                });
            } else {
                // 这一步说明x不是一个thenable对象 直接把他当成值resolve promise2
                resolve(x);
            }
        } catch (e) {
            if (called) {
                return;
            }
            called = true;
            reject(e);
        }
    } else {
        // 普通值的话就用x去resolve promise2
        resolve(x);
    }
}

// onFulfilled 是用来接收promise成功的值或者失败的原因
// 值的穿透
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 如果成功和失败的回调没有传，表示这个then没有任何逻辑，只会把值往后抛
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    };
    // 当前promise状态已经是成功态， onFulfilled直接取传递过来的值
    let _this = this;
    let promise2;
    if (this.status === FULFILLED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onFulfilled(_this.value);
                    // 如果获取到了返回值x，会走解析promise的过程
                    resovlePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    if (this.status === REJECTED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onRejected(_this.value);
                    resovlePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    // 如果是pending状态
    if (this.status === PENDING) {

        _this.onResolvedCallbacks.push(function () {
            setTimeout(function () {
                try {
                    let x = onFulfilled(_this.value);
                    resovlePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });

        });
        _this.onRejectedCallbacks.push(function () {
            setTimeout(function () {
                try {
                    let x = onRejected(_this.value);
                    resovlePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
};

// catch原理就是只传失败的回调
Promise.prototype.catch = function (onRejected) {
  this.then(null, onRejected);
};
Promise.deferred = Promise.defer = function () {
    let df = {};
    df.promise = new Promise(function (resolve, reject) {
        df.resolve = resolve;
        df.reject = reject;
    });
    return df;
};
module.exports = Promise;