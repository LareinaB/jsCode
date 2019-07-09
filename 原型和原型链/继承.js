var obj = {
    name: 'lulu',
    age: 23
};

var aObj = Object.create(obj);
// console.log(aObj.__proto__);
//
// console.log(obj.__proto__);
// console.dir(Object.prototype);

// function A() {
//     this.x = 10;
//     this.say = function () {
//         console.log("hello");
//     };
//     console.log(x);
// }
// function B() {
//     A.call(this);
//     B.say = function (){
//         console.log("no");
//     };
//     x = 20;
//     console.log(x);
// }

function A() {
    this.x = 10;
    this.say = function () {
        console.log("hello");
    }
}

function B() {
    A.call(this);
}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

var b = new B;

A.prototype.obj = {
    name: 'lulu',
    ary: [1,2,3]
};
console.log(b.obj);
b.obj.name = 'haha';
console.log(b.obj);
