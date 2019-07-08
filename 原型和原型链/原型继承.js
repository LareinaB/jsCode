function A(){
    this.x = 100;
}
A.prototype.getX = function () {
    console.log(this.x);
};

function B(){
    this.x = 50;
    // A.call(this); 构造函数继承
}

// 在父类原型链上增加方法 子类实例也会拥有这个方法
A.prototype.setX = function () {
    this.x = 200;
};

// 原型继承：让子类的原型等于父类的一个实例，因为父类的实例拥有父类的属性和方法
B.prototype = new A;

var b = new B;
// console.log(b.__proto__); //new A
// console.log(b.__proto__.__proto__); // new A.__proto__ = A.prototype
// console.log(b.__proto__.__proto__.__proto__); // A.prototype.__proto__ = Object.prototype = {}
b.setX();
b.getX();
