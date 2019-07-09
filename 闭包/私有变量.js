// var x =10,
//     y = 20,
//     z = 30;
// function fn(x, y) {
//     console.log(x, y, z);
//     var x = 100;
//     y = 200;
//     z = 300;
//     console.log(x, y, z);
// }
//
// fn(x, y, z);
// console.log(x, y, z);

function fn(b) {
    //1 形参赋值 b = 1
    //2 变量提升 function b()={...代码};
    //3 执行代码
    console.log(b); // function(){}
    function b() {
        console.log(b); // 不是私有变量会找上级作用域 function(){}
    }
    b(); // 形参没有 变量提升没有
}
fn(1);
