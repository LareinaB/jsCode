// var obj = {}; // 字面量方式
// var obj = new Object(); // 实例创建 构造函数模式
// 工厂模式
function CreateUser(name, age, song) {
    this.name = name;
    this.age = age;
    this.song = song;
    this.sing = function () {
        console.log(`my name is ${this.name}, i'm ${this.age} years old, i want to sing ${this.song}`);
    }
}
// 实例的共有属性
CreateUser.prototype.say = function () {
    console.log(`hello javascript ~~, my name is ${this.name}, i'm ${this.age} years old`);
};

var user1 = new CreateUser("lulu", 22, "告白气球");
var user2 = new CreateUser("pao", 22, "是风动");
console.log(user1.sing === user2.sing); // false
console.log(user1.say() === user2.say());  // true

// attr是否为obj的共有属性  自己实现的哈哈哈
Object.prototype.hasPubProperty = function () {
    var attr = arguments[0];
    if(typeof attr === 'undefined'){
        return false;
    }
    return (attr in this) && (!this.hasOwnProperty(attr));
};


function sum() {
    // IE不兼容 不能用__proto__
    // 让arguments.__proto__强制指向数组原型，就可以使用数组原型上的sort方法
    // arguments.__proto__原本指向Object的原型，上面一步相当于中间加个中介，
    // 因为数组原型的__proto__也指向Object的原型
    arguments.__proto__ = Array.prototype;
    arguments.sort(function (a,b) {
        return a - b;
    });
    console.log(arguments);
}
sum(12,13,24,6,32,17);
