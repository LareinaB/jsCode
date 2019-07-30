var ary = [12,34,5,61,17,38,50,7];
// ary.sort(function (a, b) {
//     // a-> 每一次执行回调函数时的当前项
//     // b-> 当前项的下一项
//     return a - b; // 升序
//     // return b - a; // 降序
// });
//
// ary.sort(function (a, b) {
//    return 1;
// });

// ary.sort(function (a, b) {
//     console.log(a, b);
// });

// 给二维数组排序，按照年龄由小到大
var person = [
    {name: '大橙子', age: 20},
    {name: '大瑞瑞', age: 24},
    {name: '小阿珍', age: 18},
    {name: '樊勇敢', age: 21},
    {name: '大冰砸', age: 19}
];
// person.sort(function (a, b) {
//     return a.age - b.age;
// });
// console.log(person);

//按照姓名排序
// person.sort(function (a, b) {
//     return a.name.localeCompare(b.name);
// });
// console.log(person);

var web = {"name": "javascript", "age": "8"};
var jsonWeb = JSON.stringify(web);
console.log(jsonWeb);