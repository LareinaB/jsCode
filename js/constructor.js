function Fn(name) {
    this.name = name;
}
Fn.prototype.getName = function () {
    console.log(1);
};
Fn.prototype.ary = [1,2,3,4];
function Sn(name) {
    Fn.call(this, name);
}

Sn.prototype = Object.create(Fn.prototype);

var sn = new Sn('lulu');
// sn.__proto__.getName = function () {
//     console.log(2);
// };
// Fn.prototype.getName();

sn.__proto__.ary[0] = 100;



var sn1 = new Sn('lulu');
// sn1.getName();

console.log(sn1.ary);
console.log(Fn.prototype.ary);
// console.log(sn);