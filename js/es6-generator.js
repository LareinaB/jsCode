// 生成器函数有一个*号
// 执行的时候
function *read(books) {
    console.log('开始');
    for (let i = 0; i < books.length; i++) {
        // 相当于断点，在这里产出一个结果
        yield books[i]
    }
    console.log('结束');
}
let it = read(['js', 'node']);
let cur = {};
while(! cur.done){
    cur = it.next();
    console.log(cur);
}
// let r1 = it.next();
// let r2 = it.next();
// let r3 = it.next();
// console.log(r1);
// console.log(r2);
// console.log(r3);
