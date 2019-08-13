// 生成器 生成迭代器
function read(books) {
    let index = 0;
    return {
        next() {
            let done = index === books.length;
            let value = books[index++];
            return {
                value,
                done
            }
        }
    }
}

// 迭代器 不停调用next方法得到一个结果{value, done}
// done为true的时候就表示取完了
let it = read(['js', 'node']);
let cur = {};
while(! cur.done){
    cur = it.next();
    console.log(cur);
}
// r1 = it.next();
// r2 = it.next();
// console.log(r1);
// console.log(r2);

