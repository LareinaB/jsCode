// console.log(num); // undefined
// console.log(fn); //undefined
// if(1 === 1){
//     console.log(num); // undefined
//     console.log(fn); // 函数体本身
//     var num = 12;
//     function fn() {
//     }
//     console.log(num); // 12
//     console.log(fn); // 函数体本身
// }
// console.log(fn); // 函数体本身
//=> 全局作用域下变量提升没有 直接执行
// f = function () {
//     return true;
// };
// g = function () {
//     return false;
// };
// 私有作用域
// 变量提升 g=undefined 只声明没定义
// ~function () {
//     if(g() && [] == ![]){ // TypeError
//         f = function () {
//             return false;
//         };
//         function g() {
//             return true;
//         }
//     }
// }();
// console.log(f());
// console.log(g());

// 声明var fn  声明加定义函数fn
// 执行代码到fn赋值为13就替换了函数中的定义
fn(); // 4
function fn() {
    console.log(1);
}
fn(); // 4
function fn() {
    console.log(2);
}
fn(); // 4
var fn = 13;
fn(); // fn is not function
function fn() {
    console.log(3);
}
fn();
function fn() {
    console.log(4);
}
fn();




