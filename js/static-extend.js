// function Parent(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Parent.prototype.getName = function () {
//     return this.name;
// };
//
// // 父类上自定义属性
// Parent.num = 1;
// Parent.sagNum = function (num) {
//     return num;
// };
//
// function Child(name, age, sex) {
//     Parent.call(this, name, age);
//     this.sex = sex;
// }
//
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
//
// var child = new Child('lulu', 23, 'female');
//
// console.log(child.num);
// console.log(Child.num);
// child.sagNum(2);

class Parent{
    static sayName() {
        console.log(1);
    }
}
class Child extends Parent{
}
Parent.sayName();
Child.sayName();

var child = new Child();
child.sayName();

