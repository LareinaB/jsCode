// promise的参数是一个异步任务
function Promise(task) {
    let that = this;
    that.status = 'pending';
    that.value = undefined;

    // 成功的回调 失败的回调
    that.onResolvedCallbacks = [];
    that.onRejectedCallbacks = [];

    // 此方法可以吧promise变为成功态
    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject);
        }
        setTimeout(function () {
            if (that.status === 'pending') {
                that.status = 'fulfilled';
                that.value = value;
                that.onResolvedCallbacks.forEach(item => item(value));
            }
        });
    }

    // 此方法可以吧promise变为失败态
    function reject(reason) {
        setTimeout(function () {
            if (that.status === 'pending') {
                that.status = 'rejected';
                that.value = reason;
                that.onRejectedCallbacks.forEach(item => item(reason));
            }
        });
    }

    // 立即执行传入的任务
    try {
        task(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'));
    }
    // 如果x是一个promise并且是pending状态就等待他执行完成
    let called = false;  // 成功或者失败只能调用一次
    if (x instanceof Promise) {
        if (x.status === 'pending') {
            x.then(function (y) {
                resolvePromise(promise2, y, resolve, reject);
            }, reject);
        } else {
            // 其他两种状态
            x.then(resolve, reject);
        }
    } else if (x !== null && ((typeof x === 'object') || (typeof x === 'function'))) {
        // 说明x是个thenable对象，有then方法
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    // 如果promise2的状态已经成功或者失败了，就不需要在处理了
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, function (err) {
                    if (called) return;
                    called = true;
                    reject(err);
                });
            } else {
                // 是个对象且有then属性，但then的属性值不是函数
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        // x是一个普通值 就用它去resolve promise2
        resolve(x);
    }
}


// 两个回调
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 如果成功和失败的回调没有传，表示这个then没有任何逻辑，只会把值往后抛
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    };

    let that = this;
    let promise2;
    if (that.status === 'fulfilled') {
        // 已经成功就立即执行
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onFulfilled(that.value);
                    // 如果获取到了返回值x, 会走解析promise的过程
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    if (that.status === 'rejected') {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onRejected(that.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    if (that.status === 'pending') {
        return promise2 = new Promise(function (resolve, reject) {
            that.onResolvedCallbacks.push(function () {
                try {
                    let x = onFulfilled(that.value);
                    // 如果获取到了返回值x, 会走解析promise的过程
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push(function () {
                try {
                    let x = onRejected(that.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
};

// catch的原理就是只传失败的回调
Promise.prototype.catch = function (onReject) {
    this.then(null, onReject);
};

Promise.deferred = Promise.defer = function () {
    let defer = {};
    defer.promise = new Promise(function (resolve, reject) {
        defer.resolve = resolve;
        defer.reject = reject;
    });
    return defer;
};

module.exports = Promise;