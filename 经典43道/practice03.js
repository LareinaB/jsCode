// Number Twenty-three
// var num = 8;
// var num = 10;

// console.log(num);
// 使用var关键字，可以用相同的名称声明多个变量。然后变量将保存最新的值。let const不行

// Number Twenty-four
// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1"); // true
// obj.hasOwnProperty(1); // true
// set.has("1"); // false
// set.has(1); // true
// 所有对象键（不包括Symbols）都会被存储为字符串，即使没有给定字符串类型的键
// 但这种说法对Set不适用

// Number Twenty-five
const obj = { a: "one", b: "two", a: "three" };
console.log(obj); // { a: "three" , b: "two" }
// 如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值。
// 引用类型改变值那个问题吧

// Number Twenty-six
// JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字.

// Number Twenty-seven
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// 1 2 4

// Number Twenty-eight
String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
};
const name = "Lydia";
name.giveLydiaPizza();
// "Just give Lydia pizza already!"
// 字符串原型添加方法 所有字符串都可以访问

// Number Twenty-nine
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// 对象键自动转换为字符串
// 当对象自动转换为字符串化时，它变成了[Object object]。 所以a[b] = 123即a["Object object"] = 123。
// 然后， c对象同样会发生隐式类型转换。那么，a["Object object"] = 456。
// 然后，打印a[b]，它实际上是a["Object object"]。 因此返回456。

// Number Thirty
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

// bar();
// foo();
// baz();
// First Third Second
// 后面细看

// Number Thirty-one
// <div onclick="console.log('first div')">
//     <div onclick="console.log('second div')">
    //     <button onclick="console.log('button')">
    //     Click!
    //     </button>
//     </div>
// </div>
// 单击按钮时event.target是"button" 导致事件的最深嵌套元素是事件的目标

// Number Thirty-two
// <div onclick="console.log('div')">
//     <p onclick="console.log('p')">
//     Click here!
// </div>
// 如果我们单击p，我们会看到两个日志：p和div。
// 在事件传播期间，有三个阶段：捕获，目标和冒泡。
// 默认情况下，事件处理程序在冒泡阶段执行（除非将useCapture设置为true）。 它从最深的嵌套元素向外延伸。

// Number Thirty-three
const person = { name: "Lydia" };
function sayHi(age) {
    console.log(`${this.name} is ${age}`);
}
sayHi.call(person, 21); // 改变this指向
sayHi.bind(person, 21);
// Lydia is 21 function
// .call方法和.bind方法可以传递我们想要this关键字引用的对象。 但是，.call方法会立即执行！
// .bind方法会返回函数的拷贝值，但带有绑定的上下文！ 它不会立即执行。

// Number Thirty-four
function sayHi() {
    return (() => 0)();
}

typeof sayHi(); // number sayHi函数返回立即调用的函数（IIFE）的返回值。 该函数返回0，类型为数字

// Number Thirty-five
// 0; -> false
// new Number(0); ->true
// (""); ->false
// (" "); ->true
// new Boolean(false); ->true
// undefined; ->false

// JavaScript中只有6个假值：
// undefined
// null
// NaN
// 0
// '' (empty string)
// false

// Thirty-six
console.log(typeof typeof 1); // string

// Thirty-seven
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

// 当你为数组中的元素设置一个超过数组长度的值时，
// JavaScript会创建一个名为“空插槽”的东西。
// 这些位置的值实际上是undefined，但你会看到类似的东西：
// [1, 2, 3, 7 x empty, 11]

// Thirty-eight
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        // 形参是私有变量
        // 这个是catch作用域里头的
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
// 1 undefined 2
// catch块接收参数x。当我们传递参数时，这与变量的x不同。这个变量x是属于catch作用域的。

// Number thirty-nine
// JavaScript中的所有内容都是原始或对象

// Number Forty
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2]
);
// [1, 2, 0, 1, 2, 3]
// [1,2]是我们的初始值。 这是开始执行reduce函数的初始值，
// 以及第一个acc的值。
// 在第一轮中，acc是[1,2]，cur是[0,1]。 将它们连接起来，结果是[1,2,0,1]。
// 然后，acc的值为[1,2,0,1]，cur的值为[2,3]。 将它们连接起来，得到[1,2,0,1,2,3]。

// Number Forty-one
// !!null; ->false
// !!""; ->false
// !!1; ->true

// Number Forty-two
setInterval(() => console.log("Hi"), 1000);
// `setInterval`方法的返回值是一个唯一的id  具体的

// Number Forty-three
// [..."Lydia"] 返回 ["L", "y", "d", "i", "a"]
// 字符串是可迭代的。 扩展运算符将迭代的每个字符映射到一个元素。
