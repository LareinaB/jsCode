// Number One
function sayHi() {
    console.log(name);
    console.log(age);
    var name = "lydia";
    let age = 23;
}

//sayHi();  //undefined ReferenceError: age is not defined

// var声明变量的时候会在创建阶段变量提升  声明但未赋值是undefined
// let在我们声明（初始化）之前，它们是不可访问的。 这被称为“暂时死区”。
// 当我们在声明变量之前尝试访问变量时，JavaScript会抛出一个ReferenceError
// let的是否存在变量提升
let name = "sansa";
{
    // console.log(name); // Uncaught ReferenceError: name is not defined
    let name = "arya";
}
// let是存在变量提升的  若不存在的话就会输出sansa，
// 但他存在一个暂时死区，在变量未赋值或初始化之前不允许访问
// 变量的赋值分为三个阶段
// -> 创建变量，在内存中开辟空间
// -> 初始化变量，将变量初始化为undefined
// -> 真正赋值
// let 的「创建」过程被提升了，但是初始化没有提升。
// var 的「创建」和「初始化」都被提升了。
// function 的「创建」「初始化」和「赋值」都被提升了。

// Number Two
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1); // 3 3 3
// }
//
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1); // 0 1 2
// }

//由于JavaScript中的事件执行机制，setTimeout函数真正被执行时，循环已经走完
// var声明的循环变量i是全局的
// let声明变量在有块作用域，因此每次迭代时都会新创建一个i

// Number Three
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2; // 这里的this是shape

    },
    perimeter: () => {
        return 2 * Math.PI * this.radius // 这里的this是他所在的上下文（定义时的位置）的环境(window)
    }
};
// shape.diameter(); // 20
// shape.perimeter(); // NaN

// Number Four
// console.log(+true); // 1 +会类型转换
// console.log(!"Lydia"); // false

// Number Five
const bird = {
    size: "small"
};

const mouse = {
    name: "Mickey",
    small: true
};
// mouse[bird.size] 等价于 mouse[bird["size"]]
// mouse.bird.size is invalid
// JavaScript解释语句。当我们使用方括号表示法时，它会看到第一个左括号[，然后继续，直到找到右括号]
// 只有在那个时候，它才会对这个语句求值。
// mouse [bird.size]：首先它会对bird.size求值，得到small。 mouse [“small”]返回true。
// 但是，使用点表示法，这不会发生。 mouse没有名为bird的键，这意味着mouse.bird是undefined。
// 然后，我们使用点符号来询问size：mouse.bird.size。 由于mouse.bird是undefined，
// 我们实际上是在询问undefined.size。 这是无效的，并将抛出Cannot read property "size" of undefined。

// Number Six
// let c = { greeting: "Hey!" };
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);  // Hello

// Number Seven
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
// new Number（）是一个内置的函数构造函数。
// 虽然它看起来像一个数字，但它并不是一个真正的数字：它有一堆额外的功能，是一个对象。
// 使用==运算符时，它只检查它是否具有相同的值。 他们都有3的值，所以它返回true
// ==会引发隐式类型转换，右侧的对象类型会自动拆箱为Number类型
// ===操作符，类型和值都需要相等

// Number Eight
class Chameleon {
    // 静态方法
    static colorChange(newColor) {
        this.newColor = newColor;  // 全局的
    }
    constructor({ newColor = "green" } = {}) {
        this.newColor = newColor; // green
    }
}
const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");

// colorChange方法是静态的。 静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级。
// 由于freddie是一个子级对象，函数不会传递，所以在freddie实例上不存在freddie方法：抛出TypeError。

//Number Nine
let greeting;
greetign = {}; // Typo!
console.log(greetign); // {}

// Number Ten
function bark() {
    console.log("Woof!");
}
bark.animal = "dog";
// 函数也是对象
