// var obj = {}; // 字面量方式
// var obj = new Object(); // 实例创建 构造函数模式
// 工厂模式
function CreateUser(name, age) {
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

var user1 = CreateUser("lulu", 22, "告白气球");
var user2 = CreateUser("pao", 22, "是风动");
console.log(user1.sing() === user2.sing()); // false
console.log(user1.say() === user2.say());  // true

// attr是否为obj的共有属性  自己实现的哈哈哈
Object.prototype.hasPubProperty = function () {
    var attr = arguments[0];
    if(typeof attr === 'undefined'){
        return false;
    }
    return (attr in this) && (!this.hasOwnProperty(attr));
};
