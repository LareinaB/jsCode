// 自动执行迭代器
function co(gen) {
    let it = gen(); // 要让声称其持续执行
    return new Promise(function (resolve, reject) {
        ~function next(lastVal) {
           let {value, done} = it.next(lastVal);
           if(done){
               // 迭代完成结果返回
               resolve(value);
           } else {
               // 没有完成就继续迭代
                value.then(next, reject);
           }
        }();
    });
}

co(read);