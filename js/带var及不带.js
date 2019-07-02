// function fn(){
//     console.log(a); // undefined 私有变量
//     var a = 12;
//     console.log(a); // 12
// }
//
// fn();
// console.log(a); //全局下没有这个属性  报错
//
// function fn1(){
//     a = 12;
//     console.log(a); // 12
// }
//
// fn();
// console.log(a); //12
//
// console.log(x, y); // undefined, undefined
// var x= 10, y = 20;
// function fn2() {
//     console.log(x, y); //undefined, 20
//     var x = y = 100;
//     console.log(x, y); // 100(私有) 100(全局)
// }
// console.log(x, y); // 10 100

console.log(fn); // undefined
var fn = function () {

};
console.log(fn); // [Function: fn]

sum(); // typeError is not a function
var sum = function () {

};
sum();

