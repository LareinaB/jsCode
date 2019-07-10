// 1、
// var num = 1,
//     obj = {
//         num: 2,
//         fn: (function (num) {
//             this.num *= 2;
//             num += 2;
//
//             return function () {
//                 this.num *= 3;
//                 num ++;
//                 console.log(num);
//             }
//         })(num)
//     };
// var fn = obj.fn;
// fn();
// obj.fn();
// console.log(num, obj.num);

// 2、
// var foo = 1;
// function bar() {
//     if(!foo){
//         var foo = 100;
//     }
//     console.log(foo);
// }
// bar();

//3、
// var foo = 'hello';
// (function (foo) {
//     // 先形参赋值
//     console.log(foo); //hello
//
//     var foo = foo || 'world';
//     // foo = foo
//     console.log(foo);
// })(foo);
// console.log(foo);

//4、
// var a = 9;
// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a ++;
//     }
// }
// var f = fn();
// console.log(f(5));
// console.log(fn()(5));
// console.log(f(5));
// console.log(a);
// 5 5 6 2

//5、
// var ary = [1,2,3,4];
// function fn(ary) {
//     ary[0] = 0;
//     ary = [0];
//     ary[0] = 100;
//     return ary;
// }
// var res = fn(ary);
// console.log(ary); // [0, 2, 3, 4]
// console.log(res); // [100]

//6、
// function fn(i) {
//     return function (n) {
//         console.log(n + (i++));
//     }
// }
// var f = fn(10);
// f(20); // 30
// fn(20)(40); // 60
// fn(30)(50); // 80
// f(30); // 41

//7、
// var num = 10;
// var obj = {num: 20};
// obj.fn = (function (num) {
//     this.num = num*3;
//     num ++;
//     return function (n) {
//         this.num += n;
//         num ++;
//         console.log(num);
//     }
// })(obj.num);
// var fn = obj.fn;
// fn(5);
// obj.fn(10);
// console.log(num, obj.num);

// 8、
// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// var f1 = new Fn;  // x=100 y=200 getX->100 公有getY 200
// var f2 = new Fn;  // x=100 y=200 getX->100 公有getY 200
// console.log(f1.getX === f2.getX); // false
// console.log(f1.getY === f2.getY); // true
// console.log(f1.__proto__.getY === Fn.prototype.getY); // true
// console.log(f1.__proto__.getX === f2.getX); // false
// console.log(f1.getX === Fn.prototype.getX); // false
// console.log(f1.constructor); // Fn
// console.log(Fn.prototype.__proto__.constructor); // Object
// f1.getX(); // 100
// f1.__proto__.getX(); // undefined
// f2.getY(); // 200
// Fn.prototype.getY(); // undefined


