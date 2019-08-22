// async-await 其实是generator+promise的语法糖

let fs = require('fs');

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
           err ? reject(err) : resolve(data);
        });
    });
}

async function read() {
    let a = await readFile('1.txt');
    console.log(a);
    let b = await readFile('2.txt');
    console.log(b);
    let c = await readFile('3.txt');
    console.log(c);
}
read();
// 返回的值可以在then里面获取到
