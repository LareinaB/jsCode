// ES5 filter concat
var a = [1,2,3,4,5];
var b = [4,5,6,7,8];

// 交集
var c = a.filter(function (item) {
   return b.indexOf(item) > -1;
});

// 差集
var d = a.filter(function (item) {
   return b.indexOf(item) === -1;
});

// 并集 差集+另一个全集
var e = d.concat(b);
console.log(e);

// ES6 扩展运算符 Set特性

var aa = new Set(a);
var bb = new Set(b);
// 交集
var cc = a.filter((x) => bb.has(x));
// 差集
var dd = a.filter((x) => !bb.has(x));

// 并集
var ee = Array.from(new Set(a.concat(b)));
ee = Array.from(new Set([...a, ...b]));
console.log(ee);

// ES7 includes方法