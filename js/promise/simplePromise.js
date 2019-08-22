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
        if(that.status === 'pending'){
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item => item(value));
        }
    }
    // 此方法可以吧promise变为失败态
    function reject(reason) {
        if(that.status === 'pending'){
            that.status = 'rejected';
            that.value = reason;
            that.onRejectedCallbacks.forEach(item => item(reason));
        }
    }
    // 立即执行传入的任务
    try{
        task(resolve, reject);
    }catch(e){
        reject(e);
    }
}

// 两个回调
Promise.prototype.then = function (onFulfiiled, onRejected) {
    let that = this;
    if(that.status === 'fulfilled'){
        // 已经成功就立即执行
        onFulfiiled(that.value);
    }
    if(that.status === 'rejected'){
        onRejected(that.value);
    }
    if(that.status === 'pending'){
        that.onResolvedCallbacks.push(onFulfiiled);
        that.onRejectedCallbacks.push(onRejected);
    }
};

module.exports = Promise;