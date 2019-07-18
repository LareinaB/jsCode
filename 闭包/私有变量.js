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

// function fn(b) {
//     //1 形参赋值 b = 1
//     //2 变量提升 function b()={...代码};
//     //3 执行代码
//     console.log(b); // function(){}
//     function b() {
//         console.log(b); // 不是私有变量会找上级作用域 function(){}
//     }
//     b(); // 形参没有 变量提升没有
// }
// fn(1);

//变量提升 var p，obj
//自上而下执行
var p = 10;
var obj = { //开辟堆内存 地址赋给obj
    p: 20,
    fn: (function (p) { // 开辟堆内存 地址赋给fn
        // var p = 30
        return function () { // 开辟堆内存 地址返回
            console.log(p);
        }
    })(obj.p)
};
obj.fn(); // 30 10
// 执行的是return那个函数而不是自执行函数
// 函数的上级作用域是自执行函数