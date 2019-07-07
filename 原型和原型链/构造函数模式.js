// var obj = {}; // 字面量方式
// var obj = new Object(); // 实例创建 构造函数模式
// 工厂模式
function createUser(name, age) {
    this.name = name;
    this.age = age;
}
// 实例的共有属性
createUser.prototype.say = function () {
    console.log(`hello javascript ~~, my name is ${this.name}, i'm ${this.age} years old`);
};

var user1 = createUser("lulu", 22);
var user2 = createUser("pao", 22);
console.log(user1.say() === user2.say());  // true

// attr是否为obj的共有属性  自己实现的哈哈哈
// function hasPubProperty(obj, attr) {
//     return (attr in obj) && (!obj.hasOwnProperty(attr));
// }
