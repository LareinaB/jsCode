// Number Eleven
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;

// console.log(member.getFullName());
// TypeError: member.getFullName is not a function
// 不能像使用常规对象那样向构造函数添加属性。 如果要一次向所有对象添加功能，则必须使用原型
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
// console.log(member.getFullName());
// 假设我们将此方法添加到构造函数本身。 也许不是每个Person实例都需要这种方法。
// 这会浪费大量内存空间，因为它们仍然具有该属性，这占用了每个实例的内存空间。
// 相反，如果我们只将它添加到原型中，我们只需将它放在内存中的一个位置，但它们都可以访问它

// Number Twelve
const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);
// Person1 { firstName: 'Lydia', lastName: 'Hallie' }
// undefined
// 对于sarah，我们没有使用new关键字。 使用new时，它指的是我们创建的新空对象。
// 但是，如果你不添加new它指的是全局对象！
// 我们指定了this.firstName等于'Sarah和this.lastName等于Smith。
// 我们实际做的是定义global.firstName ='Sarah'和global.lastName ='Smith。 sarah本身的返回值是undefined

// Number Thirteen
// 事件传播的三个阶段是什么？?
// 捕获->目标->冒泡
// 捕获阶段，事件通过父元素向下传递到目标元素。 然后它到达目标元素，冒泡开始

// Number Fourteen
// 不是所有对象都有原型 基础对象没有  基础对象指原型链终点的对象。基础对象的原型是null

// Number Fifteen
function sum(a, b) {
    return a + b;
}

sum(1, "2"); // "12" +可以强制类型转换 隐式类型转换

// Number Sixteen
let number = 0;
// console.log(number++); // 0 先用后加 number-> 1
// console.log(++number); // 2 先加后用 number->2
// console.log(number); // 2

function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
// ["", "is", "years old"] Lydia 21
// 如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。
// 其余参数获取传递到模板字符串中的表达式的值

// Number Eighteen
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 }); // Hmm.. You don't have an age I guess
// 在比较相等性时  原始类型通过他们的值进行比较 而对象通过他们的引用进行比较
// 我们作为参数传递的对象和我们用于检查相等性的对象在内存中位于不同位置，所以它们的引用是不同的

// Number Nineteen
function getAge(...args) {
    console.log(typeof args);
}

getAge(21); // object
// 扩展运算符（... args）返回一个带参数的数组。 数组是一个对象，因此typeof args返回object

// Number Twenty
function getAge() {
    // "use strict";
    age = 21;
    console.log(age);
}

// getAge(); // TypeError: Assignment to constant variable  这个题跟解释不一样

// Number Twenty-one
const sum = eval("10*10+5");
// eval会为字符串传递的代码求值。 如果它是一个表达式，就像在这种情况下一样，它会计算表达式
// eval函数扫盲

// Number Twenty-two cool_secret可以访问多长时间?
sessionStorage.setItem("cool_secret", 123);
// 关闭选项卡后，将删除存储在sessionStorage中的数据。
// 如果使用localStorage，数据将永远存在，除非例如调用localStorage.clear()

