/*
* JS里，函数是一等公民，可以作为函数的返回值，也可以作为函数的参数
 */
// function isString(param) {
//     return Object.prototype.toString.call(param) === '[object String]';
// }
//
// console.log(isString('123'));

function isType(type) {
    return function (param) {
        return Object.prototype.toString.call(param) === `[object ${type}]`;
    }
}
let isString = isType('String');
// console.log(isString('111'));

// 指定调用多少次才会真正执行函数
function eat() {
    console.log('eat up');
}
function after(time, eat) {
    return function () {
        console.log(time);
        if(! --time ){
            eat();
        }
    }
}
let newEat = after(3, eat);
newEat();
newEat();
newEat();