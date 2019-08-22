let fs = require('fs');

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, data) {
            err ? reject(err) : resolve(data);
        });
    });
}

// 生成器
function* read() {
    let a = yield readFile('1.txt');
    console.log(a);
    let b = yield readFile('2.txt');
    console.log(b);
    let c = yield readFile('3.txt');
    console.log(c);
    return c;
}

// 调用生成器 返回迭代器
// let it = read();
// let r1 = it.next();
// console.dir(r1); // { value: Promise { <pending> }, done: false }
// r1.value.then(function (data) {
//     let r2 = it.next(data); // { value: Promise { <pending> }, done: false }
//     r2.value.then(function (data) {
//         let r3 = it.next(data); // { value: Promise { <pending> }, done: false }
//         r3.value.then(function (data) {
//             let r4 = it.next(data);
//             console.log(r4); // { value: '33333333333333', done: true }
//         })
//     })
// });

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